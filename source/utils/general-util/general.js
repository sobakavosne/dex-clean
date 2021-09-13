const H = require('./general.helper')
const R = require('ramda')
const G_HANDLER = require('./general.handler')

/**
 * Extract abified files
 * @param {String} directory 
 */
const getAbified =
  (directory) =>
    R.compose(
      R.filter(x => x.endsWith('.abi.json')),
      G_HANDLER.getAllFilePaths
    )(directory)


/**
 * Extract `.tvc` files
 * @param {String} directory 
 */
const getTvc =
  (directory) =>
    R.compose(
      R.filter(x => x.endsWith('.tvc')),
      G_HANDLER.getAllFilePaths
    )(directory)

module.exports = {
  getAbified,
  getTvc
}
