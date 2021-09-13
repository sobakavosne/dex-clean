/**
 * @param {String} path 
 */
const constructDecodedPath =
  (path) =>
    path
      .replace('build-tonified', 'build-decoded')
      .replace('.tvc', '.txt')

module.exports = {
  constructDecodedPath
}
