var events=require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('zxt',function(a){
  console.log(a)
})
setTimeout(function(){
  eventEmitter.emit('aa','aaaaaaaaaaaaaaaa')
},3000)
console.log('z');