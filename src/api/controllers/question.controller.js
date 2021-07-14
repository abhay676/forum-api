import { validationResult } from 'express-validator';
import { sendResponse } from '../utils/Response.js';
import { questionService } from '../services/question.service.js';
import { replyService } from '../services/reply.service.js';
import { emailTemplate, sendMail } from '../utils/nodemailer.js';
import {
  NEW_QUESTION_ERROR,
  NEW_QUESTION,
  LIKE,
  QUESTIONS,
  QUESTION_FETCHED,
  NEW_REPLY_ERROR,
  NEW_REPLY,
  DELETE_REPLY,
  DELETE_REPLY_ERROR,
} from '../utils/Messages.js';
export const newQuestion = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendResponse(res, 400, NEW_QUESTION_ERROR, null, errors.array());
    }
    const result = await questionService.newQuestion(req.body);
    return sendResponse(res, 201, NEW_QUESTION, result, null);
  } catch (error) {
    next(error);
  }
};

export const questions = async (req, res, next) => {
  try {
    const result = await questionService.allQuestions();
    return sendResponse(res, 200, QUESTIONS, result, null);
  } catch (error) {
    next(error);
  }
};

export const getQuestionDetail = async (req, res, next) => {
  try {
    const ID = req.query.ID ?? req.query.q;
    let redirect = false;
    if (req.query.q) {
      redirect = true;
    }
    const result = await questionService.questionDetail(redirect, ID);
    return sendResponse(res, 200, QUESTION_FETCHED, result, null);
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
    const reply = await replyService.getReplyDetail(result.ID);
    // generate mail HTML
    const HTML = await emailTemplate('reply.ejs', {
      type: 'question',
      shareURL: reply.question.shareURL,
      userName: reply.user.name,
      trimText:
        reply.reply.length > 30 ? `${reply.reply.substr(0, 30)}` : reply.reply,
      isTrim: reply.reply.length > 30 ? true : false,
    });
    // send mail
    await sendMail(reply.user.email, 'Someone reply | FORUM', HTML);
    return sendResponse(res, 200, NEW_REPLY, result, null);
  } catch (error) {
    next(error);
  }
};

export const likeQuestion = async (req, res, next) => {
  try {
    const ID = req.query.ID;
    const result = await questionService.likeQuestion(ID);
    return sendResponse(res, 200, LIKE, result, null);
  } catch (error) {
    next(error);
  }
};

export const deleteQuestion = async (req, res, next) => {
  try {
    const ID = req.query.ID;
    const result = await questionService.deleteQuestion(ID);
    return sendResponse(res, 200, 'success', result, null);
  } catch (error) {
    next(error);
  }
};

export const deleteReply = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendResponse(res, 400, DELETE_REPLY_ERROR, null, errors.array());
    }
    const result = await replyService.deleteReply(req.body);
    return sendResponse(res, 200, DELETE_REPLY, result, null);
  } catch (error) {
    next(error);
  }
};
