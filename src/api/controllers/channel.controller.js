import { validationResult } from 'express-validator';
import { channelService } from '../services/channel.service.js';
import { sendResponse } from '../utils/Response.js';
import { NEW_CHANNEL_ERROR, NEW_CHANNEL, CHANNEL_DETAILS } from '../utils/Messages.js';
export const createChannel = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendResponse(res, 400, NEW_CHANNEL_ERROR, null, errors.array());
    }
    const result = await channelService.newChannel(req.body);
    return sendResponse(res, 201, NEW_CHANNEL, result, null);
  } catch (error) {
    next(error);
  }
};

export const channelDetails = async (req, res, next) => {
  try {
    const id = req.query.ID;
    const result = await channelService.channelDetails(id);
    return sendResponse(res, 200, CHANNEL_DETAILS, result, null);
  } catch (error) {
    next(error);
  }
};
