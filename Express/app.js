import express from 'express';
const app = express(); // make application
const PORT = 8080;
const handleListening = () =>
  console.log(`Server is listening on http://localhost:${PORT}`);
const paramsName = 'id';

app.get('/:' + paramsName, (req, res, next) => {
  //console.log(req.path);
  //console.log(req.headers);
  console.log(req.params); // /jinsoo => { paramsName: 'jinsoo' }
  console.log(req.query); // ?queryName=jinsoo => { queryName: 'jinsoo' }
  res.status(200).send('Hi');
});

// app.all()    해당 경로에 한해 어떤 request이던 코드 실행
// app.use()    해당 경로 내부의 어떤 경로든 어떤 request이던 코드 실행

// 한 미들웨어 안에서 2개의 send를 보내면 에러뜸 그래서 조건부 내부에서 send 할때 return res.send(sth) 해야됨
app.use(express.json()); // 요청에 들어오는 바디부분을 파싱해서 들고옴
app.post('/', (req, res, next) => {
  console.log(1);
});

app.listen(PORT, handleListening);
