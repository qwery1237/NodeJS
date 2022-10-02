const fs = require('fs');

//global은 생략가능 
global.console.log(global);
global.hello = () => console.log("hello");
hello();    // global은 생략 가능

bye = 4;
console.log(global.bye);