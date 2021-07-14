import { Router } from 'express';
import { body } from 'express-validator';
import {
  newAnswer,
  acceptAnswer,
  addReply,
  likeAnswer,
  deleteAnswer,
  deleteReply,
} from '../api/controllers/answer.controller.js';

const answerRouter = Router();

// POST -> create new answer
answerRouter.post(
  '/an',
  body('description').isString().withMessage('Description is required'),
  body('questionID').isString().withMessage('QuestionID is required'),
  body('userID').isString().withMessage('userID is required'),
  newAnswer
);

// GET -> accept a  answer
answerRouter.get('/ac', acceptAnswer);

// POST -> add reply
answerRouter.post(
  '/r/a',
  body('reply').isString().withMessage('reply is required'),
  body('answerID').isString().withMessage('answerID is required'),
  body('userID').isString().withMessage('User ID is required'),
  body('type').isNumeric().withMessage('type is required'),
  addReply
);

// DELETE -> reply to an answer
answerRouter.delete(
  '/r/d',
  body('ID').isString().withMessage('ID is required'),
  deleteReply
);
// GET -> Like a answer
answerRouter.get('/al', likeAnswer);
// DELETE -> answer
answerRouter.delete(
  '/ad',
  body('ID').isNumeric().withMessage('ID is required'),
  deleteAnswer
);

export default answerRouter;
