require('module-alias/register')

const M = require('monet')
const FS = require('fs')
const PATH = require('path')
const CLI_COLOR = require('cli-color')

/**
* Get all file paths recursively
* @param {String} directory Relative path to the target directory
* @returns {[String]} Array of paths
*/
const getAllFilesPathR =
  (directory) =>
    FS
      .readdirSync(directory)
      .map(
        directoryObject =>
          FS.statSync(PATH.join(directory, directoryObject)).isDirectory()
            ? getAllFilesPathR(
              PATH.join(directory, directoryObject),
              FS.readdirSync(PATH.join(directory, directoryObject))
            )
            : PATH.join(directory, directoryObject)
      )

/**
 * Trace function shows `target` and `comments`, returns `target`
 * @param {*} target 
 * @param  {...any} comments 
 */
const trace =
  (target, ...comments) =>
    M.IO(
      () => console.log(target, ...comments)
    ).takeRight(
      M.IO(() => target)
    ).run()

/**
 * Simple `Error` handler
 * @param {function} fnc 
 * @param  {...any} args 
 */
const catchError =
  (fnc, ...args) => { try { return fnc(...args) } catch (error) { trace(CLI_COLOR.red(error.message), ...args) } }

module.exports = {
  trace,
  catchError,
  getAllFilesPathR
}
