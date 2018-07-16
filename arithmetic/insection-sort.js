const n=1000;  //数组长度
let a=[];     // 数组
let count=0;  //记录次数
/*生成数组*/
for(let i=0;i<n;i++){
  a.push(n-i)
}

/*插入排序算法*/
for(let i=1,j,x;i<n;i++){
  j=i-1;
  x=a[i];
  count++;
  while(x>a[j]){
    a[j+1]=a[j];
    j--;
    count++;
  }
  a[j+1]=x;
}
console.log(a);
console.log(count);