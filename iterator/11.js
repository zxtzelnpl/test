let iterable = {
  0:'a',
  4:'b',
  2:'c',
  length:5,
  [Symbol.iterator]:Array.prototype[Symbol.iterator]
};

for(let item of iterable){
  console.log(item)
}