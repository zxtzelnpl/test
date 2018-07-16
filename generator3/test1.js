function makePromiseA(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('123')},3000)
  })
}

function makePromiseB(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('456')},3000)
  })
}

function makePromiseC(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('789')},3000)
  })
}

function* generator(){

  let [a,b] = yield [makePromiseA(),makePromiseB()];
  console.log('a->:',a);

  // let b = yield makePromiseB();
  console.log('b->:',b);

  let c = yield makePromiseC();
  console.log('c->:',c);

}

let g = generator();




function thunk(g,data){
  let next = g.next(data);
  if(!next.done){

    if(next.value instanceof Array){
      Promise
          .all(next.value)
          .then(data=>{
            thunk(g,data)
          })
    }
    else{
      next.value.then(data=>{
        thunk(g,data)
      })
    }
  }
}

thunk(g);


