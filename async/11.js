const fs=require('fs');

let readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function(error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

function fn(args) {
    return spawn(function* () {
        let f1 = yield readFile('./a');
        let f2  =yield readFile('./a');
        console.log(f1)
        console.log(f2)
    });
}

function spawn(genF) {
    return new Promise(function(resolve, reject) {
        console.log(genF.toString());
        var gen = genF();
        console.log(gen.toString());
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

fn()