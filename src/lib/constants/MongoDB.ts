import { IMongoConfig, UNKNOWN_VALUE } from '../../index.js'

/** The name of the DB where Hermes stores application data. */
export const MONGODB_DB_NAME = 'hermes'

/** The name of the collection where Hermes stores friends data. */
export const MONGODB_FRIENDS_COLLECTION_NAME = 'friends'

/** The name of the collection where Hermes stores user data. */
export const MONGODB_USERS_COLLECTION_NAME = 'users'

/** The name of the collection where Hermes stores config data. */
export const MONGODB_CONFIG_COLLECTION_NAME = 'config'

/** The name of the collection where Hermes stores check-in data. */
export const MONGODB_CHECK_INS_COLLECTION_NAME = 'check-ins'

/**
 * An object containing all of the default values to use for the
 * {@link IMongoConfig mongoConfig} object.
 */
export const DEFAULT_MONGO_CONFIG: IMongoConfig = {
  connectionString: UNKNOWN_VALUE,
  collections: {
    config: {
      collectionName: MONGODB_CONFIG_COLLECTION_NAME,
      dbName: MONGODB_DB_NAME,
    },
    friends: {
      collectionName: MONGODB_FRIENDS_COLLECTION_NAME,
      dbName: MONGODB_DB_NAME,
    },
    users: {
      collectionName: MONGODB_USERS_COLLECTION_NAME,
      dbName: MONGODB_DB_NAME,
    },
    checkIns: {
      collectionName: MONGODB_CHECK_INS_COLLECTION_NAME,
      dbName: MONGODB_DB_NAME,
    },
  },
}
