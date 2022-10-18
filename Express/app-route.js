import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express();

app.use('/post', postRouter);
app.use('/user', userRouter);

// app
//   .route('/posts')
//   .get((req, res, next) => {
//     res.status(201).send('GET: /posts');
//   })
//   .post((req, res, next) => {
//     res.status(201).send('POST: /posts');
//   });
app.use((err, req, res, next) => {});
app.listen(8080);
