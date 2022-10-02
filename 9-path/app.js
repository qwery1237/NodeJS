const path = require('path');

console.log(__dirname);             // directory name
console.log(__filename);            // file name

console.log(path.sep);              // 경로구분자 window = \
                                    //         mac = /
console.log(path.delimiter);        // 환경변수 구분자 Window = ;
                                    //             mac = :

// basename
console.log(path.basename(__filename)); // 파일 이름 읽어옴
console.log(path.basename(__filename, '.js'));  // 파일 확장자 제거

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);  // root, dir, base ,ext ,name 이 파싱되서 오브젝트로 리턴됨
console.log(parsed);                    // __filename => obj

// format
const str = path.format(parsed);        // obj => __filename 
console.log(str);

// isAbsolute
console.log(path.isAbsolute(__dirname));    // true
console.log(path.isAbsolute(__filename));   // true
console.log(path.isAbsolute('../'));        // false

// normalize
console.log(path.normalize('./folder////sub')); // 이상한 경로 자동으로 수정

// join
console.log(__dirname + path.sep + 'image');    // 손수 경로 만들어준거
console.log(path.join(__dirname, 'image'));     // Join 함수로 자동 경로생성