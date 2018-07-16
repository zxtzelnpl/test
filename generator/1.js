function* helloWorldGenerator(){
  yield 'hello';
  yield ['world','world1'];
  return 'ending';
}

let hw = helloWorldGenerator();

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());