const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf8')       //  파일 데이터 받아옴 ,2번째 인자는 인코딩
  .then(console.log)
  .catch(console.error);

// Write a file
fs.writeFile('./text.txt', 'Hello, Dream Coders! :)')
  .catch(console.error);

// append a file
fs.appendFile('./text.txt', 'Yo!, Dream Coders! :)')
  .catch(console.error);

// copy
fs.copyFile('./text.txt', './file2.txt')
  .catch(console.error);

// make folder
fs.mkdir('sub-folder')
  .catch(console.error);

// read dir
fs.readdir(__dirname)
  .then(console.log)
  .catch(console.error);