const arr = ['red','green','blue'];

for(let v of arr){
  console.log(v);
}

const obj = {};
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

for(let v of obj){
  console.log(v);
}