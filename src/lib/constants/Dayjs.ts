import Dayjs from 'dayjs'

/**
 * The format to use with Dayjs for formatting the `lastContact` property of a
 * Check-In.
 *
 * @example
 * console.log(Dayjs().format(LATEST_CONTACT_FORMAT)) // 2021-09-01T12:00:00-06:00
 */
export const LATEST_CONTACT_FORMAT = 'YYYY-MM-DDTHH:mm:ssZZ[Z]'

/**
 * Attempts to get the `lastContact` property from a given Request object. It
 * will first check the `query` object, then the `body` object, and finally
 * will return the current date and time using the Dayjs library and the
 * {@link LATEST_CONTACT_FORMAT} format.
 *
 * @param request The request object from the endpoint.
 *
 * @returns A formatted string of the latest contact date for a given Check-In request.
 */
export function getLatestContactDate(request: any) {
  return (
    request.query.lastContact || request.body.lastContact || Dayjs().format(LATEST_CONTACT_FORMAT)
  )
}
