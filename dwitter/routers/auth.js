import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as authController from '../controllers/auth.js';
import { validate } from '../middlewares/validator.js';
import { isAuth } from '../middlewares/auth.js';

const router = express.Router();
const validateCredential = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('username should be at lease 5 characters'),
  body('password')
    .trim()
    .isLength({ min: 5 })
    .withMessage('password should be at lease 5 characters'),
  validate,
];
const validateSignup = [
  ...validateCredential,
  body('name').notEmpty().withMessage('name is missing'),
  body('email').isEmail().normalizeEmail().withMessage('invalid email'),
  body('url')
    .isURL()
    .withMessage('invalid URL')
    .optional({ nullable: true, checkFalsy: true }),
  validate,
];

router.post('/signup', validateSignup, authController.signup);
router.post('/login', validateCredential, authController.login);
router.get('/me', isAuth, authController.me);

export default router;
