console.log('logging....');
console.clear();

// log level
console.log('log');     // 개발
console.info('info');   // 정보
console.warn('warn');   // 경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(false, 'false!'); // 값이 false일 때만 콘솔에 출력
console.assert(true, 'true!');   // 출력 x

// print object
const student = { name: 'jinsoo', age:25, company: { name: 'AC' } };
console.log(student);
console.table(student);  // 테이블 형태로 출력
console.dir(student, { showHidden: true, colors: false, depth: 1 }); // log 보다 상세히 출력

// measuring time
console.time('measuring')
for (let i = 0; i < 5000; i++) {
    i++;
}
console.timeEnd('measuring'); 

// counting
function a() {
    console.count('a function'); // 같은 이름이면 ++ 됨
}
a();
a();
console.countReset('a function'); // 카운트 리셋
a();
a();

// trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace();
}
f1();