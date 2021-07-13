import { Router } from 'express';
import { body } from 'express-validator';

import {
  createChannel,
  channelDetails,
} from '../api/controllers/channel.controller.js';

const channelRouter = Router();

channelRouter.post(
  '/chc',
  body('name').isString().withMessage('Channel name is required'),
  createChannel
);

channelRouter.get('/ch', channelDetails);

export default channelRouter;
