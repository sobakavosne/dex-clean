const R = require('ramda')
const FS = require('fs')

/**
 * @param {String} path 
 */
const readContractSync =
  (path) =>
    R.compose(
      JSON.parse,
      R.curry(FS.readFileSync)(R.__, { encoding: "utf8" })
    )(path)

module.exports = {
  readContractSync
}
