import * as dweetRepository from '../data/data.js';

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
  const { text, username, name } = req.body;
  const newDweet = await dweetRepository.create(text, username, name);
  res.status(201).json(newDweet);
};

export const updateDweet = async (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body;
  const dweet = await dweetRepository.update(id, text);
  if (dweet) {
    dweet.text = text;
    res.status(200).json(dweet);
  } else {
    res.status(404).json({ message: `Dweet id(${id}) not found!` });
  }
};

export const deleteDweet = async (req, res, next) => {
  const { id } = req.params;
  await dweetRepository.remove(id);
  res.sendStatus(204);
};
