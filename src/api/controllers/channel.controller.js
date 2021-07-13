import { validationResult } from 'express-validator';
import { channelService } from '../services/channel.service.js';
export const createChannel = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await channelService.newChannel(req.body);
    return res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

export const channelDetails = async (req, res, next) => {
  try {
    const id = req.query.ID;
    const result = await channelService.channelDetails(id);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
