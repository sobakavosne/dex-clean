require('module-alias/register')

const H = require('@general-helper')
const CP = require('child_process')
const CLI_COLOR = require('cli-color')

/**
 * Run `Solidity` -> `TON` compiler 
 * @param {Array<String>} pathCollection 
 */
const solCompile =
  (pathCollection) =>
    pathCollection.map(
      path => CP.exec(
        `tondev sol compile ${path} -o source/build/build-tonified`,
        (error, stdout, stderr) =>
          error
            ? H.trace(error)
            : H.trace(CLI_COLOR.green('Compiler Success. Path:'), path)
      )
    )

module.exports = {
  solCompile
}
