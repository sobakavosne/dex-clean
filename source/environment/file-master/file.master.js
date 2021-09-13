const ABI_WRAPPER = require('./abi-wrapper/abi.wrapper')
const SOL_COMPILER = require('./sol-compiler/sol.compiler')
const TON_DECODER = require('./ton-decoder/ton.decoder')

module.exports = {
  abiWrapIO: ABI_WRAPPER.abiWrapIO,
  solCompileIO: SOL_COMPILER.solCompileIO,
  tonDecodeIO: TON_DECODER.tonDecodeIO
}
