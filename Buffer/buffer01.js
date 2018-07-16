var buf1 = new Buffer(10);
var buf2 = new Buffer([10, 20, 30, 40, 50]);
var buf3 = new Buffer("www.runoob.com", "utf-8");

console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf3.toJSON(buf3));