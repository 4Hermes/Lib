import { ISimpleKVObject } from '../index.js'

/**
 * This interface defines the object that's stored in the `package.json` file
 * for the project.
 */
export interface IPackageJSON {
  name: string
  displayName: string
  version: string
  description: string
  main: string
  exports: string
  types: string
  type: string
  license: string
  homepage: string
  scripts: ISimpleKVObject<string>
  engines: IPackageJSONEngines
  keywords: string[]
  repository: IPackageJSONRepository
  author: IPackageJSONAuthor
  bugs: IPackageJSONBugs
  dependencies: ISimpleKVObject<string>
  devDependencies: ISimpleKVObject<string>
}

/**
 * This interface defines the object that contains the properties that are used
 * as the `author` property in the `package.json` file.
 */
export interface IPackageJSONAuthor {
  name: string
  email: string
  url: string
}

/**
 * This interface defines the object that contains the properties that are used
 * as the `bugs` property in the `package.json` file.
 */
export interface IPackageJSONBugs {
  email: string
  url: string
}

/**
 * This interface defines the object that contains the properties that are used
 * as the `engines` property in the `package.json` file.
 */
export interface IPackageJSONEngines {
  node: string
}

/**
 * This interface defines the object that contains the properties that are used
 * as the `repository` property in the `package.json` file.
 */
export interface IPackageJSONRepository {
  type: string
  url: string
}
