/**
 * This interface defines the object that contains the necessary (and optional)
 * properties that can be set to configure the API server.
 */
export interface IAPIConfig {
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
}
