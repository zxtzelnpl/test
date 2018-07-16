function* foo(x){
  console.log(x,y,z);
  var y = 2*(yield(x+1));
  console.log(x,y,z);
  var z = yield(y/3);
  console.log(x,y,z);
  return (x+y+z);
}

var a=foo(5);
console.log(a.next())
console.log(a.next(3))
console.log(a.next(2))