/** This interface represents the request body for the `/check-in` API route. */
export interface ICheckInRequest {
  /** The ID of the user who's requesting the Check-In. */
  userId: string

  /**
   * The ID of the Friend we're checking in on. The ID comes from the object
   * stored in the `friends` collection of the `hermes` DB.
   */
  friendId: string

  /**
   * An optional field to use as the prompt for the GPT AI model. If this field
   * is not provided, this value will be set to a default prompt like so:
   *
   * ```text
   * Please write a message from me, ${username}, to my friend, ${friendName},
   * where I'm checking in on them to see how they've been doing.
   * ```
   */
  prompt?: string
}
