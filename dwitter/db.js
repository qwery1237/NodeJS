import mongoose from 'mongoose';
import { config } from './config.js';

mongoose.connect(config.db.host, (error) => {
  if (error) {
    console.log('There was an error', error);
  } else {
    console.log('Database Succesfully Connected');
  }
});
