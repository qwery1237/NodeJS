const fs = require('fs');

// create
const writeStream = fs.createWriteStream('./file3.txt');

// finish => callback
writeStream.on('finish', () => {
  console.log('finished!');
});

// write
writeStream.write('hello!');
writeStream.write('world');

// finish writing
writeStream.end();
