import { createClient, SupabaseClient, SupabaseClientOptions } from '@supabase/supabase-js'

/**
 * This class is a base class that is used to provide common functionality to
 * all of the other classes that are for interacting with my Supabase Cloud
 * Tenant.
 */
export class BaseSupa {
  protected supabase: SupabaseClient

  public constructor(
    supabaseUrl: string,
    supabaseKey: string,
    options?: SupabaseClientOptions<'public'> | undefined
  ) {
    // Create a single Supabase client for interacting with Supabase.
    this.supabase = createClient(supabaseUrl, supabaseKey, options)
  }
}
