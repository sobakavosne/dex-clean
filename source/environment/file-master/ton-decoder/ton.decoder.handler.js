require('module-alias/register')

const H = require('@general-helper')
const M = require('monet')
const R = require('ramda')
const FS = require('fs')
const CP = require('child_process')
const CFG = require('dotenv').config().parsed
const CLI_COLOR = require('cli-color')
const TON_DECODER_HELPER = require('./ton.decoder.helper')

/**
 * Decode `.tvc` collection 
 * @param {Array<String>} pathCollection 
 */
const tonDecode =
  (pathCollection) =>
    pathCollection.map(
      path => CP.exec(
        `${CFG.TVM_LINKER} decode --tvc ${path} | grep code: | cut -c 8- > ${TON_DECODER_HELPER.constructDecodedPath(path)}`,
        (error, stdout, stderr) =>
          error
            ? H.trace(error)
            : H.trace(CLI_COLOR.green('Decoder Success. Path:'), path)
      )
    )

/**
 * @param {String} folder 
 * @param {Array<String>} pathCollection 
 */
const maybeDecodedFolder =
  (folder, pathCollection) =>
    FS.existsSync(folder.replace('build-tonified', 'build-decoded'))
      ? pathCollection
      : M.IO(
        () => FS.mkdirSync(folder.replace('build-tonified', 'build-decoded'))
      ).takeRight(
        M.IO(() => pathCollection)
      ).run()

module.exports = {
  tonDecode,
  maybeDecodedFolder: R.curry(maybeDecodedFolder)
}
