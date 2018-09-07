const fs = require('fs')


fs.readFile('file.js', function (err, contents) {
  if (err) {
    return console.log(err)
  }
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})