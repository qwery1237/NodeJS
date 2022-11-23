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

import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as dweetController from '../controllers/dweets.js';
import { validate } from '../middlewares/validator.js';
import { isAuth } from '../middlewares/auth.js';

const router = express.Router();
const validateDweet = [
  body('text')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Text should be at least 3 characters'),
  validate,
];

router.get('/', isAuth, dweetController.getDweets);
router.get('/:id', isAuth, dweetController.getDweetById);
router.post('/', isAuth, validateDweet, dweetController.postDweet);
router.put('/:id', isAuth, validateDweet, dweetController.updateDweet);
router.delete('/:id', isAuth, dweetController.deleteDweet);

export default router;
