async function f() {

    await new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('await2');

            resolve('await2')
            throw new Error('错误拉')
        }, 1000);

    }).catch(function(e){
        console.log(e)
    })

    await new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('await2');
            resolve('await2')
        }, 1000);
    });

    return 'yes'

}

f()
    .then(v => console.log(v))
    .catch(e => console.log('错'+e));