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
  [Symbol.iterator]() { return this; }

  next (){
    this.index++;
    if(this.index<this.len){
      return {done:false,value:this.arr[this.index]}
    }else{
      return {done:true,value:undefined}
    }
  }
}

let obj = new myObj('zxt','hq','xpt');

for(var value of obj){
  console.log(value)
}