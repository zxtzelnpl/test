function* f(){
  console.log('执行了');
  return '执行了'
}

var generator= f();

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())