/**
 * Created by Administrator on 2017/6/21 0021.
 */
var events = require('events');
var EventEmitter = events.EventEmitter;

var event = new EventEmitter();

event.on('newListener',function(eventName,callback){
  console.log('########');
  callback('bbb');
  console.log('########');
})

event.once('one',function(a,b){
  console.log(1);
  console.log(arguments);
});
event.once('one',function(a,b){
  console.log(2);
  console.log(arguments);
})
event.once('one',function(a,b){
  console.log(3);
  console.log(arguments);
})
event.once('one',function(a,b){
  console.log(4);
  console.log(arguments);
})
event.addListener('one',function(){
  console.log('This is a addListenser')
})

event.emit('one',1,2,3,4,5);
event.emit('one',6,7,8,9,10);

