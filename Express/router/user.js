import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(201).send('get: /users');
});
router.post('/', (req, res) => {
  res.status(201).send('post: /users');
});
router.put('/:id', (req, res) => {
  res.status(201).send('put: /users/:id');
});
router.delete('/:id', (req, res) => {
  res.status(201).send('delete: /users/:id');
});

export default router;
