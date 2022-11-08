import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();
const PORT = 5050;
const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT}`);

app.use(express.json());

app.post(
  '/users',
  body('name').isLength({ min: 2 }).withMessage('Minimum name length is 2'),
  (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ message: err.array() });
    }
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get('/:email', (req, res, next) => {
  res.send('💌');
});
app.listen(PORT, handleListening);
