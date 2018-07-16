function* f(){
  for(let i = 0;true;i++){
    var reset = yield i;
    if(reset == 'zxt'){i = -1}
  }
}

var g = f();

console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next('zxt'))
console.log(g.next())
console.log(g.next())
console.log(g.next())
