import * as userRepository from './auth.js';
let dweets = [
  {
    id: '1',
    text: 'First Dweets!',
    createdAt: new Date().toString(),
    userId: '1',
  },
];
export function getAll() {
  return Promise.all(
    dweets.map(async (dweet) => {
      const { username, name, url } = await userRepository.findById(
        dweet.userId
      );
      return { ...dweet, username, name, url };
    })
  );
}
export async function getByUsername(username) {
  return getAll().then((dweets) =>
    dweets.filter((el) => el.username === username)
  );
}

export async function getById(id) {
  const found = dweets.find((dweet) => dweet.userId === id);
  if (!found) {
    return null;
  }
  const { username, name, url } = await userRepository.findById(found.userId);
  return { ...found, username, name, url };
}

export async function create(text, userId) {
  const newDweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    userId,
  };
  dweets = [newDweet, ...dweets];
  return getById(newDweet.userId);
}

export async function update(id, text) {
  const dweet = dweets.find((dweet) => dweet.userId === id);
  dweet ? (dweet.text = text) : null;
  return getById(dweet.userId);
}

export function remove(id) {
  dweets = dweets.filter((el) => el.userId !== id);
}
