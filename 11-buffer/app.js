const fs = require("fs");
const buf = Buffer.from("Hi");

console.log(buf); // unicode 형태

// buffer length
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]); // ascii code 형태

// buffer encoding
console.log(buf.toString()); // default 가 utf-8, 다른거로 지정가능

// create
const buf2 = Buffer.alloc(2); // size 2 의 버퍼 생성 and 초기화
const buf3 = Buffer.allocUnsafe(2); // fast but not 초기화 x
buf2[0] = 72; // H
buf2[1] = 105; // i

// copy
buf2.copy(buf3);
console.log(buf2, buf3);
console.log(buf2.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
