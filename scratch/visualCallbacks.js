// This isn't how the actual fs.readFile
// module is implemented.  This is just a simplified example.

var fs =

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



fs.readFile('/path', 'utf8', function (err, data) {
  if (err) throw err
  console.log(data)
})
