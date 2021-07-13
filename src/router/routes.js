import { Router } from 'express';
import userRouter from './user.routes.js';
import channelRouter from './channel.routes.js';
import questionRouter from './question.routes.js';
import answerRouter from './answer.routes.js';
import uploadRouter from './upload.routes.js';

const router = Router();

router.use(userRouter);
router.use(channelRouter);
router.use(questionRouter);
router.use(answerRouter);
router.use(uploadRouter);

export default router;
