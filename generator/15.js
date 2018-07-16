/*辗转相除法*/
function  GCD(x,y){
  let [small,big] = [x,y]
  while(small>0){
    [small,big] = [big%small,small]
  }
}

GCD(377,319)