/**
 *AuthorJenaszhang
 */
Array.prototype.buildMaxHeap=function(){
  for(var i=Math.floor(this.length/2)-1;i>=0;i--){
    this.heapAdjust(i,this.length);
  }
};

Array.prototype.swap=function(i,j){
  var tmp=this[i];
  this[i]=this[j];
  this[j]=tmp;
};

Array.prototype.heapSort=function(){
  this.buildMaxHeap();
  for(var i=this.length-1;i>0;i--){
    this.swap(0,i);
    this.heapAdjust(0,i);
  }

  return this;
};

Array.prototype.heapAdjust=function(i,j){
  var largest=i;
  var left=2*i+1;
  var right=2*i+2;

  if(left<j&&this[largest]<this[left]){
    largest=left;
  }

  if(right<j&&this[largest]<this[right]){
    largest=right;
  }

  if(largest!=i){
    this.swap(i,largest);
    this.heapAdjust(largest,j);
  }
};

var a=new Array();
[].push.apply(a,[2,3,89,57,23,72,43,105,6,4,5,7,8,9]);
console.log(a.heapSort());/**
 * Created by Administrator on 2017/7/6 0006.
 */
