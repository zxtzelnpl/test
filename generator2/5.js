/**
 * Created by zxt_z on 2017/8/26.
 */
var fetch = require('node-fetch');

function* gen(){
  var url = 'http://localhost:3000/api/homead';
  var result = yield fetch(url);
  console.log(result.message);
}

var g = gen();
var result = g.next();

result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
});