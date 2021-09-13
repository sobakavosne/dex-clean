require('module-alias/register')

const R = require('ramda')
const G_HANDLER = require('@general-handler')
const SOL_COMPILER_HANDLER = require('./sol.compiler.handler')

/**
 * Compile all `.sol` files in folder
 * @param {String} folder 
 */
const solCompileIO =
  (folder) =>
    R.compose(
      SOL_COMPILER_HANDLER.solCompile,
      G_HANDLER.getAllFilePaths
    )(folder)

module.exports = {
  solCompileIO
}
