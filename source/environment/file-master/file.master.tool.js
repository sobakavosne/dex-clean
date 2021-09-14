const SOL_COMPILER = require('./sol-compiler/sol.compiler')
const ABI_WRAPPER = require('./abi-wrapper/abi.wrapper')
const TON_DECODER = require('./ton-decoder/ton.decoder')

SOL_COMPILER
  .solCompileIO('./source/origin/implementation')

ABI_WRAPPER
  .abiWrapIO('./source/build/build-tonified')

TON_DECODER
  .tonDecodeIO('./source/build/build-tonified')
