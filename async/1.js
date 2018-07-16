import fs from 'fs';

let readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function(error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

let asyncReadFile = async function () {
    let f1 = await readFile('./a');
    let f2 = await readFile('./b');
    console.log(f1.toString());
    console.log(f2.toString());
};

asyncReadFile();