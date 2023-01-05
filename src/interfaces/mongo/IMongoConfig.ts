import { MongoClientOptions } from 'mongodb'
import { IMongoCollections } from './index.js'

/**
 * This interface defines the object that contains the necessary (and optional)
 * values used to interact with my MongoDB Cluster.
 *
 * _NOTE: Only the connectionString and `collections` properties are required by
 * the project. The rest of the properties are available since this interface
 * extends the {@link MongoClientOptions} interface provided by the MongoDB
 * driver._
 */
export interface IMongoConfig extends MongoClientOptions {
  /**
   * This string is what will be used by the MongoDB driver to connect to the
   * cluster.
   */
  connectionString: string

  /**
   * This property contains a key-value pair where the key is the name of the
   * collection and the value is an object containing the details of the
   * collection. All of the collections in this property are used by the at
   * some point in the lifecycle of the application.
   */
  collections: IMongoCollections

  /**
   * This property is an array of strings that contain the names of the
   * various collections that are used by the application.
   */
  collectionNames: string[]
}
