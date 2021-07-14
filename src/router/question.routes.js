import { Router } from 'express';
import { body } from 'express-validator';

import {
  newQuestion,
  questions,
  getQuestionDetail,
  addReply,
  likeQuestion,
  deleteQuestion,
  deleteReply,
} from '../api/controllers/question.controller.js';

const questionRouter = Router();

questionRouter.post(
  '/qc',
  body('heading').isString().withMessage('Heading is required'),
  body('description').isString().withMessage('Description is required'),
  body('channelID').isString().withMessage('Channel is required'),
  body('userID').isString().withMessage('CreatedBY is required'),
  newQuestion
);

questionRouter.get('/ql', questions);

questionRouter.get('/qd', getQuestionDetail);

questionRouter.post(
  '/r/q',
  body('reply').isString().withMessage('reply is required'),
  body('questionID').isString().withMessage('questionID is required'),
  body('userID').isString().withMessage('User ID is required'),
  body('type').isNumeric().withMessage('type is required'),
  addReply
);

// DELETE -> reply to an answer
questionRouter.delete(
  '/r/d',
  body('ID').isString().withMessage('ID is required'),
  deleteReply
);

questionRouter.get('/ql', likeQuestion);

questionRouter.delete(
  '/qd',
  body('ID').isNumeric().withMessage('ID is required'),
  deleteQuestion
);

export default questionRouter;
