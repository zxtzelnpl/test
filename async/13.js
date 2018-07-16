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

function spawn(genF) {
    return new Promise(function(resolve, reject) {
        var gen = genF();
        function step(nextF) {
            try {
                var next = nextF();
            } catch(e) {
                return reject(e);
            }
            if(next.done) {
                return resolve(next.value);
            }
            Promise.resolve(next.value).then(function(v) {
                step(function() { return gen.next(v); });
            }, function(e) {
                step(function() { return gen.throw(e); });
            });
        }
        step(function() { return gen.next(undefined); });
    });
}

function chainAnimationsGenerator(elem, animations) {

    return spawn(function*() {
        var ret = null;
        try {
            for(var anim of animations) {
                ret = yield anim(elem);
            }
        } catch(e) {
            /* 忽略错误，继续执行 */
        }
        return ret;
    });

}

var g=chainAnimationsGenerator(elem, animations);
console.log(g)