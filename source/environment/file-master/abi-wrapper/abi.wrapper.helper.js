const R = require('ramda')
const M = require('monet')
const FS = require('fs')

/**
 * @param {String} folder 
 * @param {Array<String>} pathCollection 
 */
const maybeWrappedFolder =
  (folder, pathCollection) =>
    FS.existsSync(folder.replace('build-tonified', 'build-wrapped'))
      ? pathCollection
      : M.IO(
        () => FS.mkdirSync(folder.replace('build-tonified', 'build-wrapped'))
      ).takeRight(
        M.IO(() => pathCollection)
      ).run()

module.exports = {
  maybeWrappedFolder: R.curry(maybeWrappedFolder)
}
