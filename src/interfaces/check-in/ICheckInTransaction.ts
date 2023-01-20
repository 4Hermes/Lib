/**
 * This interface defines the object that's stored in the `checkins` collection
 * in the `hermes` DB. It serves as a transaction record (of sorts) for all of
 * the Check-Ins performed by the users of Hermes.
 */
export interface ICheckInTransaction {
  /**
   * The ID of the Check-In object. It doesn't have to be provided on Check-In
   * as it'll automatically be generated upon creation.
   */
  _id: string

  /** The ID of the user who's requesting the Check-In. */
  userId: string

  /**
   * The ID of the Friend we're checking in on. The ID comes from the object
   * stored in the `friends` collection of the `hermes` DB.
   */
  friendId: string

  /**
   * The date & time when the Check-In was requested. This value is
   * automatically generated upon creation and uses the following format:
   *
   * `YYYY-MM-DDTHH:mm:ssZZ[Z]`
   *
   * @example
   * console.log(Dayjs().format(LATEST_CONTACT_FORMAT)) // 2023-01-01T16:20:00-06:00
   */
  lastContact: string
}
