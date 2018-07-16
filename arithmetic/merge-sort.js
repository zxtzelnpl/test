function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  var me=result.concat(left).concat(right);
  console.log(me);
  return me;
}
function mergeSort(items) {
  if (items.length == 1) {
    return items;
  }
  let middle = Math.floor(items.length / 2),
    left = items.slice(0, middle),
    right = items.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

var a=[9,7,3,5,2,1,4,6,8];
console.log(mergeSort(a));


/*
* mergeSort([9,7,3,5,2,1,4,6,8])
* merge( mergeSort([9,7,3,5]) , mergeSort([2,1,4,6,8]) )
* merge( merge(mergeSort([9,7]),mergeSort([3,5])) , merge(mergeSort([2,1]),mergeSort([4,6,8]) ))
* merge( merge(merge(mergeSort([9]),mergeSort([7])),merge(mergeSort([3]),mergeSort([5]))) , merge(merge(mergeSort([2]),mergeSort([1])),merge(mergeSort[4,6]),mergeSort([8])) ))
* merge( merge(merge(mergeSort([9]),mergeSort([7])),merge(mergeSort([3]),mergeSort([5]))) , merge(merge(mergeSort([2]),mergeSort([1])),merge(merge(mergeSort([4]),mergeSort([6]))),mergeSort([8])) ))
* merge( merge(merge(mergeSort([9]),mergeSort([7])),merge(mergeSort([3]),mergeSort([5]))) , merge(merge(mergeSort([2]),mergeSort([1])),merge(merge(mergeSort([4]),mergeSort([6]))),mergeSort([8])) ))
* */