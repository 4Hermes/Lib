import {
  BaseUtil,
  DEFAULT_API_CONFIG,
  DEFAULT_APP_CONFIG,
  DEFAULT_SUPABASE_CONFIG,
  IAPIConfig,
  IAppConfig,
  IOUtil,
  IPackageJSON,
  ISupabaseConfig,
} from '../../index.js'

/**
 * This class is a utility class that provides methods/functions for getting the
 * configuration settings for the API servers that make up **Project Hermes**.
 *
 * _NOTE: This class extends the {@link BaseUtil} class which provides other
 * utility methods & properties._
 */
export class ConfigUtil extends BaseUtil {
  /**
   * An instance of the {@link IOUtil} class for reading the contents of the
   * [package.json][0] file in the root of the API repository.
   *
   * [0]: ../../../package.json
   */
  private ioUtil: IOUtil = new IOUtil()

  /**
   * Creates an object containing all the required configuration settings for
   * the application to run. It's an async function since it calls the
   * {@link getAPIConfig} method which is also an async function and explains
   * why in its documentation.
   *
   * @returns An object containing the configuration for the application.
   *
   * @see {@link IAppConfig} — {@link IAPIConfig} — {@link IMongoConfig} — {@link ISupabaseConfig}
   */
  public async getAppConfig(): Promise<IAppConfig> {
    const apiConfig = await this.getAPIConfig()
    const supabaseConfig = this.getSupabaseConfig()

    return { ...DEFAULT_APP_CONFIG, apiConfig, supabaseConfig }
  }

  /**
   * Creates an object containing all the configuration settings for the KoaJS
   * API server. It's an async function since it needs to read the
   * `package.json` file to get the name and version of the application if their
   * related environment variables are not set.
   *
   * @returns An object containing the configuration for the API server.
   */
  public async getAPIConfig(): Promise<IAPIConfig> {
    const packageJSON: IPackageJSON = await this.ioUtil.getPackageJSON()

    return {
      apiPrefix: process.env.API_PREFIX || DEFAULT_API_CONFIG.apiPrefix,
      apiAdminToken: process.env.API_ADMIN_TOKEN || DEFAULT_API_CONFIG.apiAdminToken,
      apiName: process.env.API_NAME || packageJSON.name || DEFAULT_API_CONFIG.apiName,
      apiVersion: process.env.API_VERSION || packageJSON.version || DEFAULT_API_CONFIG.apiVersion,
      apiPort: Number(process.env.API_PORT) || DEFAULT_API_CONFIG.apiPort,
    }
  }

  /**
   * Composes/creates an object of type {@link ISupabaseConfig} that contains
   * the configuration options for Supabase. It will attempt to read the values
   * from the environment variables, however if they are not set, it will use
   * the default values that are stored at the following path:
   *
   * `Lib-Shared/src/lib/constants/Supabase.ts`
   *
   * @returns An object containing the configuration options for Supabase.
   *
   * @see {@link ISupabaseConfig}
   * @see {@link DEFAULT_SUPABASE_CONFIG}
   */
  public getSupabaseConfig(): ISupabaseConfig {
    return {
      url: process.env.SUPABASE_URL || DEFAULT_SUPABASE_CONFIG.url,
      apiKey: process.env.SUPABASE_API_KEY || DEFAULT_SUPABASE_CONFIG.apiKey,
    }
  }
}
