/*第一段执行完以后，任务所在的上下文环境就已经结束了。在这以后抛出的错误，原来的上下文环境已经无法捕捉，只能当作参数，传入第二段。*/

const fs = require('fs');

fs.readFile('./zxt.text', 'utf-8', function (err, data) {
  if (err) throw err;
  console.log(data);
});