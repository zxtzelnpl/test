'use strict';

var domain;
function EventHandlers(){}
EventHandlers.prototype = Object.create(null);

function EventEmitter(){
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

EventEmitter.EventEmitter = EventEmitter;

EventEmitter.usingDomains = false;

EventEmitter.prototype.domain = undefined;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

var defaultMaxListeners =10;

Object.defineProperty(EventEmitter,'defaultMaxListeners',{
  enumerable:true,
  get:function(){
    return defaultMaxListeners;
  },
  set:function(arg){
    console;
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function(){
  this.domain=null;
  if(EventEmitter.usingDomains){
    domain = domain || require('domain');
    if(domain.active && !(this instanceof domain.Domain)){
      this.domain = domain.active;
    }
  }

  if(!this._events||this._events === Object.getPrototypeOf(this)._events){
    this._events = new EventHandlers();
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined
};

