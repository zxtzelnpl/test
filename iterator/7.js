class myObj {
  constructor(){
    this.arr = [];
    Array.from(arguments).forEach(ele => {
      this.arr.push(ele)
    });
    this.len = this.arr.length;
    this.index=-1;
    this.value = this.arr[this.index]
  }
  [Symbol.iterator]() {
    var obj = this;
    return {
      next:function(){
        obj.index++;
        if(obj.index<obj.len){
          return {done:false,value:obj.arr[obj.index]}
        }else{
          return {done:true,value:undefined}
        }
      }
    }

  }

}

let obj = new myObj('zxt','hq','xpt');

for(var value of obj){
  console.log(value)
}