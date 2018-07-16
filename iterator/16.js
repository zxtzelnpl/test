const engines = new Set(['Gecko','Trident','Webkit','Webkit']);
for(let e of engines){
  console.log(e)
}

var es6 = new Map();
es6.set("edition",6);
es6.set("committee","TC39");
es6.set("standard","ECMA-262");
for(var [name,value] of es6){
  console.log(name+':'+value)
}