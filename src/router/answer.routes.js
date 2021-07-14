import { Router } from 'express';
import { body } from 'express-validator';
import {
  newAnswer,
  acceptAnswer,
  addReply,
  likeAnswer,
} from '../api/controllers/answer.controller.js';

const answerRouter = Router();

answerRouter.post(
  '/an',
  body('description').isString().withMessage('Description is required'),
  body('questionID').isString().withMessage('QuestionID is required'),
  body('userID').isString().withMessage('userID is required'),
  newAnswer
);

answerRouter.get('/ac', acceptAnswer);

answerRouter.post(
  '/ar',
  body('reply').isString().withMessage('reply is required'),
  body('answerID').isString().withMessage('answerID is required'),
  body('userID').isString().withMessage('User ID is required'),
  body('type').isNumeric().withMessage('type is required'),
  addReply
);

answerRouter.get('/al', likeAnswer);

export default answerRouter;
