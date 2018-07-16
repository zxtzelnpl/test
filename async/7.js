async function f() {
    await new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('await1');
            resolve('await1')
        }, 1000);
    });
    await new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('await2');
            resolve('await2')
        }, 1000);
    });
    return await 'yes'
}

var g = f();

console.log(g)

g.then(
    v => console.log(v),
    e => console.log(e)
)

setTimeout(function(){
    console.log(g)
},1000)