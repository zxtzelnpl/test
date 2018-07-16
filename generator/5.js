let myObj = {
  zxt:'赵学通',
  hq:'韩茜',
  xpt:'赵文琬'
}

myObj[Symbol.iterator] = function*(){
  yield this.zxt;
  yield this.hq;
  yield this.xpt;
}

console.log([...myObj])