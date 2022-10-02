const sayHello = () => console.log('hello 😝');
const calculate = (x, y) => {
  console.log('calculating...');
  const result = x + y;
  console.log('result: ', result);
  sayHello();
  return result;
};

calculate(1, 2);

const stop = 4;
console.log('.... looping ....');
for (let i = 0; i < 10; i++) {
  console.log('count', i);
  if (i === stop) {
    break;
  }
}

// create a launch.json -> config -> runtimeExecutable : nodemon , restart : true
// 코드 변경시 재시작
