import { validationResult } from 'express-validator';
import { answerService } from '../services/answer.service.js';
import { replyService } from '../services/reply.service.js';
export const newAnswer = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await answerService.addAnswer(req.body);
    return res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

export const acceptAnswer = async (req, res, next) => {
  try {
    const ID = req.query.ID;
    const result = await answerService.acceptAnswer(ID);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const addReply = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await replyService.addReply(req.body);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const likeAnswer = async (req, res, next) => {
  try {
    const ID = req.query.ID;
    const result = await answerService.likeAnswer(ID);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
