const fs = require('fs');

fs.readFile('./zxt.text', 'utf-8', function (err, data1) {
  fs.readFile('./zxt2.text', 'utf-8', function (err, data2) {
    console.log(data1)
    console.log(data2)
  });
});