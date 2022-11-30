import mongoose from 'mongoose';

const dweetSchema = mongoose.Schema({
  text: { type: String, reqired: true, minLength: 5, maxLength: 500 },
  createdAt: { type: Date, required: true, default: Date.now },
  userId: { type: Number, reqired: true },
});

const dweet = mongoose.model('Dweet', dweetSchema);

export default dweet;
