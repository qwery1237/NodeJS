const fs = require('fs');

// rename(...., callback(error,data))      비동기
// try{ renameSync(....) } catch(e) { }    동기 
// promises.rename().then().catch(0)       비동기


// try {
//     fs.renameSync('./text.txt', './text-new.txt');
// } catch (error) {
//     console.error(error);
// }
console.log('hello');


// 이두개는 비동기라 뭐가 먼저 끝날 지 모름 그래서 같은 파일을 건들고 있으므로 에러가 발생 될 수 있다....
fs.rename('./text-new.txt', './text.txt',(error)=>{
    error ? console.error(error) : console.log('File name has changed.');
})

fs.promises
    .rename('./text.txt','./text-new.txt')
    .then(() => console.log('Done!'))
    .catch(console.error);
