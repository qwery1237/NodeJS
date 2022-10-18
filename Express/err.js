import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
import {} from 'express-async-errors'; // num i express-async-error

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
  //동기적 코드 에러처리
  // 트라이 캐치 안써도 맨마지막에 에러처리 미들웨어에서 캐치되고 처리됨 트라이캐치도 되고
  // try {
  //   const data = fs.readFileSync('/file.txt');
  // } catch (error) {
  //   res.status(404).send('File not found!');
  // }
  //
  // 비동기적 코드 에러처리
  // 만약 내부 콜백에서 에러처리 안하면 다른 미들웨어나 트라이 캐치로는 에러 처리가 안됨
  fs.readFile('/file1.txt', (err, data) => {
    err && res.status(404).send('File not found!!!') && console.error(err);
  });
});

app.get('/file2', (req, res, next) => {
  // promise 에러처리 비동기이기 떄문에 똑같고 .catch 에서 에러처리 해주면 됩니당
  return fsAsync.readFile('/file.txt'); // 미들웨어안에서 쓸때 리턴을 해줘야 함
  // .then(req.send)
  // .catch(() => res.status(404).send('File does not exist'));
});

app.get('/file3', async (req, res) => {
  // async await 로 동기로 만들어 줬으나 함수자체가 프로미스라 외부 미들웨어에서는 에러처리가 안됨 그래서 트라이캐치 해줘야 함.
  //  try {
  const data = await fsAsync.readFile('/file.txt');
  //  } catch (error) {
  //    res.status(404).send('File does not exist!!!');
  //  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);
