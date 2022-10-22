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

let dweets = [
  {
    id: '1',
    text: 'First Dweets!',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
    url: '',
  },
  {
    id: '2',
    text: 'Second Dweets!',
    createdAt: Date.now().toString(),
    name: 'Jin',
    username: 'jin',
    url: '',
  },
];

const router = express.Router();

const getDweets = (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? dweets.filter((el) => el.username === username)
    : dweets;
  res.status(200).json(data);
};

const getDweetById = (req, res, next) => {
  const id = req.params.id;
  const dweet = dweets.find((el) => el.id === id);
  dweet
    ? res.status(200).json(dweet)
    : res.status(404).json({ message: `Dweet id(${id}) not found!` });
};

const postDweet = (req, res, next) => {
  const { text, username, name } = req.body;
  const newDweet = {
    id: dweets.length + 1,
    text,
    createdAt: new Date(),
    name,
    username,
  };
  dweets = [newDweet, ...dweets];
  res.status(201).json(newDweet);
};

const updateDweet = (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body;
  const dweet = dweets.find((el) => el.id === id);
  if (dweet) {
    dweet.text = text;
    res.status(200).json(dweet);
  } else {
    res.status(404).json({ message: `Dweet id(${id}) not found!` });
  }
  console.log(dweets[+id] === dweet);
};

const deleteDweet = (req, res, next) => {
  const { id } = req.params;
  dweets = dweets.filter((el) => el.id !== id);
  res.sendStatus(204);
};

router.get('/', getDweets);
router.get('/:id', getDweetById);
router.post('/', postDweet);
router.put('/:id', updateDweet);
router.delete('/:id', deleteDweet);

export default router;
