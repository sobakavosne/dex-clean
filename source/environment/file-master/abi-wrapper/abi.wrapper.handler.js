require('module-alias/register')

const H = require('@general-helper')
const CP = require('child_process')
const PATH = require('path')
const CLI_COLOR = require('cli-color')

/**
 * Run `TON abi` -> `JS` wrapper 
 * @param {Array<String>} pathCollection 
 */
const abiWrap =
  (pathCollection) =>
    pathCollection.map(
      path => CP.exec(
        `tondev js wrap ${path} -o ../build-wrapped/${PATH.basename(path).replace('.abi.json', '.js')}`,
        (error, stdout, stderr) =>
          error
            ? H.trace(error)
            : H.trace(CLI_COLOR.green('Wrapper Success. Path:'), path)
      )
    )

module.exports = {
  abiWrap
}
