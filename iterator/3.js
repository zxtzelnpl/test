const obj = {
  [Symbol.iterator]:function(){
    return {
      next : function () {
        return {
          value:1,
          done:true
        }
      }
    }
  }
};

var iter = obj[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());