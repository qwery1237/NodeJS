//전체 트윗 다 가져오기
//해당 유져 트윗 가져오기
//다른 유저 닉을통해 유져 트윗 가져오기
// 트윗 포스트
// 트윗 삭제
// 트윗 편집

// Tweets Schema
/*
 {
  id:string,
  text: string,
  createdAt: Date,
  name: string,
  username: string,
  url: string
 }
 */

import e from 'express';
import express from 'express';
import 'express-async-errors';
import * as dweetController from '../controllers/dweets.js';

const router = express.Router();

router.get('/', dweetController.getDweets);
router.get('/:id', dweetController.getDweetById);
router.post('/', dweetController.postDweet);
router.put('/:id', dweetController.updateDweet);
router.delete('/:id', dweetController.deleteDweet);

export default router;
