require('module-alias/register')

const H = require('@general-helper')
const TONCLIENT_CORE = require('@tonclient/core')
const TONCLIENT_LIB_NODE = require('@tonclient/lib-node')
const DEX_ROOT = require('@build-wrapped/DEXRoot.js')
const TONCLIENT_APPKIT = require('@tonclient/appkit')

TONCLIENT_CORE
  .TonClient
  .useBinaryLibrary(TONCLIENT_LIB_NODE.libNode)

DEX_ROOT.DEXRootContract
