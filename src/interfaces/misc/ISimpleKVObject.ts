/**
 * This interface defines an object that has properties that are a key/value
 * pair where the value is of type `T`.
 *
 * _NOTE: The default type for `T` is a `string`._
 */
export interface ISimpleKVObject<T = string> {
  [key: string]: T
}