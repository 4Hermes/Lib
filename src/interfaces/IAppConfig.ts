import { IMongoConfig, ISupabaseConfig } from './index.js'

/**
 * This interface defines the object that contains the various configuration
 * settings that can be set for the API.
 */
export interface IAppConfig {
  /** The string to prepend before all routes (default: `/api/v1`). */
  apiPrefix?: string

  /**
   * The token to use for authenticating admin requests to the API. This does
   * _NOT_ make use of Supabase Auth, but rather a simple string comparison,
   * largely for testing purposes.
   */
  apiAdminToken: string

  /** The name of the API/App. */
  apiName: string

  /** The version of the API/App (default: `v0.0.0`). */
  apiVersion?: string

  /** The port to listen on (default: `5050`). */
  apiPort?: number

  /** The configuration settings/information for Supabase. */
  supabaseConfig?: ISupabaseConfig

  /** The configuration settings/information for the MongoDB database. */
  mongoConfig?: IMongoConfig
}
