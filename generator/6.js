function* gen(){
  yield 'first';
  yield 'second';
  yield 'third';
}

var g = gen();

console.log([...g])

console.log(g[Symbol.iterator]() === g)