const R = require('ramda')
const DEPLOYER_UTIL_HANDLER = require('./deployer.util.handler')

/**
 * Extract `keys` field  
 * @param {String} path Path to parse
 */
const getKeysJSON =
  (path) =>
    R.compose(
      contract => contract.keys,
      DEPLOYER_UTIL_HANDLER.readContractSync
    )(path)

/**
 * Extract `address` field 
 * @param {String} path Path to parse
 */
const getAddressJSON =
  (path) =>
    R.compose(
      contract => contract.address,
      DEPLOYER_UTIL_HANDLER.readContractSync
    )(path)

module.exports = {
  getKeysJSON,
  getAddressJSON
}
