var fs = require('fs')

function uppercaseRead(path, callback) {
  fs.readFile(path, 'utf8', function (err, data) {
    if err return callback(err)
    var uppercaseData = data.toUpperCase()
    callback(null, uppercaseData)
  }
}

function logger (err, data) {
  if (err) return console.error(err)
  console.log(data)
}

uppercaseRead('/path/to/file', logger)
// Prints err or uper cased file content
