import { Document, ObjectId } from 'mongodb'

/**
 * This interface represents a Friend object in the `props` DB, under the
 * `friends` collection of my MongoDB Cluster.
 */
export interface IFriend extends Document {
  _id: ObjectId

  /** The name of the Friend object. */
  name: string

  /** A display name, of sorts, for the Friend object. */
  alias?: string

  /**
   * The phone number of the Friend object, in the international format.
   *
   * For example: `+1-555-555-5555`
   */
  number: string

  /** The date and time of the last time the Friend was contacted. */
  lastContact?: string
}


