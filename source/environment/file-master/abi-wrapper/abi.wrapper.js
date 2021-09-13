require('module-alias/register')

const R = require('ramda')
const G = require('@general')
const ABI_WRAPPER_HELPER = require('./abi.wrapper.helper')
const ABI_WRAPPER_HANDLER = require('./abi.wrapper.handler')

/**
 * Wrap `TON abi` files in folder. Save wrapped to `build/build-wrapped/`
 * @param {String} folder 
 */
const abiWrapIO =
  (folder) =>
    R.compose(
      ABI_WRAPPER_HANDLER.abiWrap,
      ABI_WRAPPER_HELPER.maybeWrappedFolder(folder, R.__),
      G.getAbified
    )(folder)

module.exports = {
  abiWrapIO
}
