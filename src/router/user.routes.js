import { Router } from 'express';
import { body } from 'express-validator';
import {
  signUp,
  user,
  userDashboard,
} from '../api/controllers/user.controller.js';

const userRouter = Router();

// POST -> save new user
userRouter.post(
  '/us',
  body('name').isString().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email is required'),
  signUp
);
// GET -> user detail
userRouter.get('/u', user);

// GET -> user dashboard
userRouter.get('/u/main', userDashboard)
export default userRouter;
