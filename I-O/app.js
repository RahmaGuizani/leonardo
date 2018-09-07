var fs = require('fs')
const read=fs.readFileSync("file.js").toString();
console.log(((read.split('\n')).length)-1)