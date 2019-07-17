if (dirname !== __dirname) {
  throw new Error(`Invalid __dirname, expected ${__dirname} but got ${dirname}`);
}
if (filename !== __filename) {
  throw new Error(`Invalid __filename, expected ${__filename} but got ${filename}`);
}
