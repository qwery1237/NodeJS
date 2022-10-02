const fs = require('fs');

const readStream = fs.createReadStream('./file.txt');
const writeStream = fs.createWriteStream('./file4.txt');

// pipe
const piping = readStream.pipe(writeStream); // readstream 에 있는 데이터 writestream 으로 파이핑;

piping.on('finish', () => {
  console.log('Done!');
});
