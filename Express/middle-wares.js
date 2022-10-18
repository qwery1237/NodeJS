import express from 'express';
import cors from 'cors'; // npm i cors
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

const app = express();

const corsOptions = {
  origin: ['http://127.0.0.1:5500'],
  optionsSuccessStatus: 200,
  credentials: true, // 헤더에 사용자 정보 추가를 허용 (Access-Control-Allow-Credentials: true)
};

// 내부 미들웨어들
app.use(express.json()); // JSON -> Body
app.use(express.urlencoded({ extended: false })); // HTML Form -> Body
//app.use(express.static('path', options))   path 안에 있는 모든 리소스를 사용자가 읽어갈 수 있도록 해줌

// 외부 미들웨어들
app.use(cookieParser()); // cookie parsing
app.use(morgan('combined')); // req 정보들 옵션 줄 수 있음 모니터링할 때 씀
app.use(cors(corsOptions)); // 해주면 외부 도메인에서 내 정보 접근이 가능해 진다.
app.use(helmet()); // 공통적으로 보안에 필요한 헤더들을 추가해줌
app.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  res.send('Welcome!');
});
app.listen(8080);
