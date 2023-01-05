import { SupaProviders } from '../../interfaces/index.js'
import { BaseSupa } from '../index.js'

export class SupaAuth extends BaseSupa {
  //#region Sign-In Methods
  /**
   * Attempts to sign in the user by passing the provided e-mail address and
   * password to the {@link } method.
   *
   * @param email The user's e-mail address.
   * @param password The user's password.
   *
   * @returns The result of the `signInWithPassword` method.
   */
  public async signInWithEmail(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password })
  }

  public async signInWithDiscord() {
    return this.supabase.auth.signInWithOAuth({ provider: SupaProviders.Discord })
  }

  public async signInWithGitHub() {
    return this.supabase.auth.signInWithOAuth({ provider: SupaProviders.GitHub })
  }

  public async signInWithTwitch() {
    return this.supabase.auth.signInWithOAuth({ provider: SupaProviders.Twitch })
  }

  public async signInWithTwitter() {
    return this.supabase.auth.signInWithOAuth({ provider: SupaProviders.Twitter })
  }
  //#endregion Sign-In Methods

  /**
   * Attempts to sign the user up by passing the provided e-mail address and
   * password to the {@link } method.
   *
   * @param email The user's e-mail address.
   * @param password The user's password.
   * @returns The result of the `signUp` method.
   */
  public async signupWithEmail(email: string, password: string) {
    return this.supabase.auth.signUp({ email, password })
  }

  public async signout() {
    return this.supabase.auth.signOut()
  }
}
