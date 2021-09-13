require('module-alias/register')

const H = require('./general.helper')
const R = require('ramda')

/**
* @param {String} directory Relative path to the target directory
* @returns {[String]} Flatten array of paths
*/
const getAllFilePaths =
  (directory) =>
    H.catchError(
      R.compose(R.flatten, H.getAllFilesPathR),
      directory
    )

module.exports = {
  getAllFilePaths
}
