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
export function getAll() {
  return dweets;
}
export function getByUsername(username) {
  return dweets.filter((el) => el.username === username);
}

export function getById(id) {
  return dweets.find((el) => el.id === id);
}

export function create(text, username, name) {
  const newDweet = {
    id: dweets.length + 1,
    text,
    createdAt: new Date(),
    name,
    username,
  };
  dweets = [newDweet, ...dweets];
  return newDweet;
}

export function update(id, text) {
  const dweet = getById(id);
  dweet ? (dweet.text = text) : null;
  return dweet;
}

export function remove(id) {
  dweets = dweets.filter((el) => el.id !== id);
}
