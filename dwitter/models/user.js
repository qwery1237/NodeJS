import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { config } from '../config.js';

const userSchema = mongoose.Schema({
  username: { type: String, required: true, minLength: 3, unique: true },
  password: { type: String, required: true, minLength: 8 },
  name: { type: String, required: true, minLength: 3 },
  email: { type: String, required: true, unique: true },
  url: { type: String },
});

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, config.bcrypt.saltRounds);
});

const User = mongoose.model('User', userSchema);

export default User;
