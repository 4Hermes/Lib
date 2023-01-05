/**
 * This interface defines the object that contains the necessary (and optional)
 * values used to interact with my Supabase Cloud Tenant.
 */
export interface ISupabaseConfig {
  /** The URL for the Supabase API. */
  url: string

  /** The API key for the Supabase API. */
  apiKey: string
}
