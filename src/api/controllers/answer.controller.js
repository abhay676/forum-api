import { validationResult } from 'express-validator';
import { answerService } from '../services/answer.service.js';
import { replyService } from '../services/reply.service.js';
import { sendResponse } from '../utils/Response.js';
import {
  NEW_ANSWER,
  NEW_ANSWER_ERROR,
  ANSWER_ACCEPTED,
  NEW_REPLY,
  NEW_REPLY_ERROR,
  LIKE,
} from '../utils/Messages.js';
export const newAnswer = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendResponse(res, 400, NEW_ANSWER_ERROR, null, errors.array());
    }
    const result = await answerService.addAnswer(req.body);
    return sendResponse(res, 201, NEW_ANSWER, result, null);
  } catch (error) {
    next(error);
  }
};

export const acceptAnswer = async (req, res, next) => {
  try {
    const ID = req.query.ID;
    const result = await answerService.acceptAnswer(ID);
    return sendResponse(res, 201, ANSWER_ACCEPTED, result, null);
  } catch (error) {
    next(error);
  }
};

export const addReply = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendResponse(res, 400, NEW_REPLY_ERROR, null, errors.array());
    }
    const result = await replyService.addReply(req.body);
    return sendResponse(res, 201, NEW_REPLY, result, null);
  } catch (error) {
    next(error);
  }
};

export const likeAnswer = async (req, res, next) => {
  try {
    const ID = req.query.ID;
    const result = await answerService.likeAnswer(ID);
    return sendResponse(res, 200, LIKE, result, null);
  } catch (error) {
    next(error);
  }
};
