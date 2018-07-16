var someString = 'hi';
console.log(typeof someString[Symbol.iterator]);

var iterator = someString[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log([...someString]);