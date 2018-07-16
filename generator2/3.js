/**
 * Created by zxt_z on 2017/8/26.
 */
const readFile = require('fs-readfile-promise');

readFile('./zxt.text','utf-8')
.then((data)=>{
  console.log(data)
})
.then(()=>{
  return readFile('./zxt2.text','utf-8')
})
.then((data)=>{
  console.log(data)
})
.catch((err)=>{
  console.log(err)
})