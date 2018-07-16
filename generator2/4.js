/**
 * Created by zxt_z on 2017/8/26.
 */
function *gen(x){
  var y = yield x+2;
  return y;
}

var g = gen(1)

console.log(g.next())
console.log(g.next())