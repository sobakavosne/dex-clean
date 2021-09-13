require('module-alias/register')

const R = require('ramda')
const G = require('@general')
const TON_DECODER_HANDLER = require('./ton.decoder.handler')

/**
 * Decode `.tvc` files. Save decoded to `build/build-decoded/`
 * @param {String} folder 
 */
const tonDecodeIO =
  (folder) =>
    R.compose(
      TON_DECODER_HANDLER.tonDecode,
      TON_DECODER_HANDLER.maybeDecodedFolder(folder, R.__),
      G.getTvc
    )(folder)

module.exports = {
  tonDecodeIO
}
