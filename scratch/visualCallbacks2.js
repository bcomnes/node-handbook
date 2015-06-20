fs.readFile = function(filename, options, callback) {
  // File reading code not shown
  //
  //
  //
  //
  //
  //
  //
  //
  //
  callback(err, data)
}

fs.readFile('/path', 'utf8', logger)

function logger (err, data) {
  if (err) return console.error(err)
  console.log(data)
}
