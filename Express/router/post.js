import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(201).send('get: /posts');
});
router.post('/', (req, res) => {
  res.status(201).send('post: /posts');
});
router.put('/:id', (req, res) => {
  res.status(201).send('put: /posts/:id');
});
router.delete('/:id', (req, res) => {
  res.status(201).send('delete: /posts/:id');
});

export default router;
