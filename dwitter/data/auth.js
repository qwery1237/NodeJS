import Dweet from '../models/dweet.js';

export async function findByUsername(username) {
  const dweets = Dweet.find({ username });
  return dweets;
}
export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function createUser(user) {
  const created = { ...user, id: '' + (users.length + 1) };
  return created.id;
}
