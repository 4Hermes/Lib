import { ObjectId, Document } from 'mongodb'

export interface IBaseDocument extends Document {
  /** The unique identifier of the document/object. */
  _id: ObjectId

  /**
   * A date-time string representing when the object was created, in the
   * [ISO 8601][0] format.
   *
   * [0]: https://www.iso.org/iso-8601-date-and-time-format.html
   */
  createdDate: string

  /**
   * A date-time string representing when the object was last modified, in [ISO
   * 8601][0] format.
   *
   * [0]: https://www.iso.org/iso-8601-date-and-time-format.html
   */
  lastModifiedDate: string
}
