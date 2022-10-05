const os = require('os');

console.log(os.EOL === '\n'); // true(End of the Line)
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());

// 내 os에 정보들에 관련된 정보들 받아올때 씀
