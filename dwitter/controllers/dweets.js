import * as dweetRepository from '../data/dweet.js';

export const getDweets = async (req, res, next) => {
  const username = req.query.username;
  const data = await (username
    ? dweetRepository.getByUsername(username)
    : dweetRepository.getAll());
  res.status(200).json(data);
};

export const getDweetById = async (req, res, next) => {
  const id = req.params.id;
  const dweet = await dweetRepository.getById(id);
  dweet
    ? res.status(200).json(dweet)
    : res.status(404).json({ message: `Dweet id(${id}) not found!` });
};

export const postDweet = async (req, res, next) => {
  const { text } = req.body;
  const newDweet = await dweetRepository.create(text, req.userId);
  res.status(201).json(newDweet);
};

export const updateDweet = async (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body;
  const dweet = await dweetRepository.update(id, text);
  if (dweet) {
    if (req.userId !== id) {
      return res.sendStatus(403);
    } else {
      dweet.text = text;
      return res.status(200).json(dweet);
    }
  } else {
    return res.status(404).json({ message: `Dweet id(${id}) not found!` });
  }
};

export const deleteDweet = async (req, res, next) => {
  const { id } = req.params;
  if (req.userId !== id) {
    return res.sendStatus(403);
  }
  dweetRepository.remove(id);
  return res.sendStatus(204);
};
