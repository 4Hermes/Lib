import {
  DEFAULT_MONGO_CONFIG,
  DEFAULT_SUPABASE_CONFIG,
  IAPIConfig,
  IAppConfig,
} from '../../index.js'

/** The default prefix to use for API routes. */
export const DEFAULT_API_PREFIX = '/api/v1'

/**
 * The default token to use for admin requests, should be replaced by setting
 * the `API_ADMIN_TOKEN` environment variable.
 */
export const DEFAULT_API_ADMIN_TOKEN = 'UH3tQFsqJi^2'

/** The default port the API should listen on. */
export const DEFAULT_API_PORT = 5050

/** The default name of the API. */
export const DEFAULT_API_NAME = '@4lch4/hermes-api'

/** The default version of the API. */
export const DEFAULT_API_VERSION = '0.0.0'

/**
 * The default value to use for unknown values (e.g. a function called without
 * providing its parameters, use this for those parameter values).
 */
export const UNKNOWN_VALUE = 'Unknown'

/**
 * An object containing all of the default values to use for the
 * {@link IAPIConfig apiConfig} object.
 */
export const DEFAULT_API_CONFIG: IAPIConfig = {
  apiPrefix: DEFAULT_API_PREFIX,
  apiAdminToken: DEFAULT_API_ADMIN_TOKEN,
  apiName: DEFAULT_API_NAME,
  apiVersion: DEFAULT_API_VERSION,
  apiPort: DEFAULT_API_PORT,
}

/**
 * An object containing all of the default values to use for the
 * {@link IAppConfig appConfig} object.
 */
export const DEFAULT_APP_CONFIG: IAppConfig = {
  apiConfig: DEFAULT_API_CONFIG,
  mongoConfig: DEFAULT_MONGO_CONFIG,
  supabaseConfig: DEFAULT_SUPABASE_CONFIG,
}
