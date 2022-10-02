const process = require('process');

console.log(process.execPath); // 현재 프로세스 위치;
console.log(process.version);  // 현재 프로세스 버전
console.log(process.pid);      // process id
console.log(process.ppid);     // process parent id
console.log(process.platform); // platform
console.log(process.env);      // 환경변수 정보
console.log(process.uptime()); // 실행시간
console.log(process.cwd());    // 현재 실행 프로세스의 경로
console.log(process.cpuUsage()); // cpu 사용량

process.nextTick(() => {        // 테스크 큐 에 다른 콜백 함수가 있더라도 
                                //무시하고 테스크큐 가장 앞에 이 콜백함수 넣어줌
    console.log('nextTick');
})