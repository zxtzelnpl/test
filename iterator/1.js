var it = makeIterator(['a','b']);
function makeIterator(array){
  var nextIndex = 0;
  return {
    next: function(){
      return nextIndex < array.length ?
        {value:array[nextIndex++],done:false}:
        {value:undefined,done:true}
    }
  }
}

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());