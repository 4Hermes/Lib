import { IMongoCollectionDetails } from './index.js'

/**
 * This interface defines the object that contains information on the various
 * MongoDB Collections (and the database they're stored within) that are used by
 * the application.
 */
export interface IMongoCollections {
  /**
   * This property contains a key-value pair where the key is the name of the
   * collection and the value is an object containing the details of the
   * collection. All of the collections in this property are used by a service
   * at some point in the lifecycle of Project Hermes.
   */
  [key: string]: IMongoCollectionDetails
}
