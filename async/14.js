let animations = [
    function (ele){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log(1);
                resolve (ele+'1')
            },500)
        })
    },
    function (ele){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log(2);
                resolve (ele+'2')
            },500)
        })
    },
    function (ele){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log(3);
                resolve (ele+'3')
            },500)
        })
    },
    function (ele){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log(4);
                resolve (ele+'4')
            },500)
        })
    },
];
let elem =1;

async function chainAnimationsAsync(elem, animations) {
    var ret = null;
    try {
        for(var anim of animations) {
            ret = await anim(elem);
            console.log(ret);
        }
    } catch(e) {
        /* 忽略错误，继续执行 */
    }
    return ret;
}

chainAnimationsAsync(elem, animations)