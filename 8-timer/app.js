let num = 1;
const interval = setInterval(() => {
    console.log(num++);
}, 1000);                               // 일정시간마다 콜백실행;

setTimeout(() => {                      // 일정 시간이후 콜백 실행
    console.log('Timeout!');
    clearInterval(interval);            // setInterval함수 break;
}, 6000);