function randomNum(start,stop){
  return Math.floor(Math.random()*(stop-start))+start;
}

function randomStr (long){
  let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let len = letters.length;
  let str = '';
  for(let i=0;i<long;i++){
    let num = randomNum(0,26);
    str += letters[num]
  }
  return str;
}

let obj = {};

for(let i=0;i<10;i++){
  let key = randomStr(4);
  obj[key] = randomNum(0,1000);
}

function* entries(obj){
  for(let key of Object.keys(obj)){
    yield [key,obj[key]]
  }
}

for(let [key,value] of entries(obj)){
  console.log(key,'->',value);
}