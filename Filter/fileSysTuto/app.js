console.log("starting file systéme module app")
const fs=require('fs');

fs.readFile('movies.txt', function (err, data) {
  if (err) throw err;
  console.log(data);
});