import { IAPIConfig, ISupabaseConfig } from './index.js'

/**
 * This interface defines the object that contains the various configuration
 * settings that can be set for the API.
 */
export interface IAppConfig {
  /** The configuration settings/information for the API server. */
  apiConfig: IAPIConfig

  /** The configuration settings/information for Supabase. */
  supabaseConfig?: ISupabaseConfig
}
