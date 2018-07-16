class People{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  first (){
    console.log(this.name)
  }

  second(){
    console.log(this.age);
  }
}
People.prototype.secret={
  male:'adam'
};

class Worker extends People{
  constructor(name,age,job){
    super(name,age);
    this.job = job;
  }

  third(){
    console.log(this.job)
  }
}

const zxt  = new Worker('赵学通',28,'H5');

for(let key in zxt){
  console.log(key,'->',typeof key)
}

console.log(Object.constructor.toString);