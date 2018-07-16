let animations = [
    function (ele){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve (ele+'1')
            },500)
        })
    },
    function (ele){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve (ele+'2')
            },500)
        })
    },
    function (ele){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve (ele+'3')
            },500)
        })
    },
    function (ele){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve (ele+'4')
            },500)
        })
    },
];
let elem =1;

// Promise 的写法
function chainAnimationsPromise(elem, animations) {

    // 变量ret用来保存上一个动画的返回值
    let ret = null;

    // 新建一个空的Promise
    let p = Promise.resolve();

    // 使用then方法，添加所有动画
    for(let anim of animations) {
        p = p.then(function(val) {
            ret = val;
            console.log(ret);
            return anim(elem);
        });
    }

    // 返回一个部署了错误捕捉机制的Promise
    return p.catch(function(e) {
        /* 忽略错误，继续执行 */
    }).then(function(val) {
        console.log(ret);
        console.log(val);
        return ret;
    });

}

chainAnimationsPromise(elem, animations);