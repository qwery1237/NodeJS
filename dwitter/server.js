import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import dweetsRouter from './routers/dweets.js';

const app = express();
const PORT = 8080;
const handleListening = console.log(
  `✅ Server Listening on http://localhost:${PORT}`
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
//전체 트윗 다 가져오기
//해당 유져 트윗 가져오기
//다른 유저 닉을통해 유져 트윗 가져오기
// 트윗 포스트
// 트윗 삭제
// 트윗 편집
app.use('/dweets', dweetsRouter);

// snippets user config -> js.json에서 alias 설정 가능
app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(PORT, handleListening);
