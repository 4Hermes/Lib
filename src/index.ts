//#region Imports
import * as Interfaces from './interfaces/index.js'
import * as Lib from './lib/index.js'
import { logger } from '@4lch4/logger'
//#endregion Imports

//#region Debug Logging
logger.debug(`[Lib-Shared]: Exporting interfaces...`)
logger.debug(JSON.stringify(Interfaces, null, 2))

logger.debug(`[Lib-Shared]: Exporting lib...`)
logger.debug(JSON.stringify(Lib, null, 2))
//#endregion Debug Logging

//#region Exports
export { Interfaces, Lib }
export * from './interfaces/index.js'
export * from './lib/index.js'
//#endregion Exports
