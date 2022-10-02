const fs = require('fs');

const data = [];
// create stream
const readStream = fs
  .createReadStream('./file.txt', {
    //highWaterMark: 8, // default = 64 kbytes
    encoding: 'utf-8',
  })
  // when get data => callback
  .on('data', (chunk) => {
    data.push(chunk);
  })
  // when finish getting data => callback
  .on('end', () => {
    console.log(data.join(''));
  })
  // when an error occurs => callback
  .on('error', console.error);

// once 는 딱 처음 한번만
