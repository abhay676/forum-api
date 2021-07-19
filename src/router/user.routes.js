import { Router } from 'express';
import { body } from 'express-validator';
import {
  signUp,
  user,
  userDashboard,
  login,
  verifyOTP,
} from '../api/controllers/user.controller.js';

const userRouter = Router();

// POST -> save new user
userRouter.post(
  '/us',
  body('name').isString().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email is required'),
  signUp
);

// POST -> user login
userRouter.post(
  '/login',
  body('email').isEmail().withMessage('email is required'),
  body('userID').isString().withMessage('userID is required'),
  login
);

// POST -> verify OTP
userRouter.post(
  '/verify',
  body('code').isString().withMessage('code is required'),
  verifyOTP
);
// GET -> user detail
userRouter.get('/u', user);

// GET -> user dashboard
userRouter.get('/u/main', userDashboard);
export default userRouter;
