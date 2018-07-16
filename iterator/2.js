var it = idMaker();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function idMaker(){
  var index = 0;

  return {
    next:function(){
      return {value:index++,done:false}
    }
  }
}