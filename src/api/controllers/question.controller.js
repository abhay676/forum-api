import { validationResult } from 'express-validator';
import { questionService } from '../services/question.service.js';
import { replyService } from '../services/reply.service.js';
import { emailTemplate, sendMail } from '../utils/nodemailer.js';
export const newQuestion = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await questionService.newQuestion(req.body);
    return res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

export const questions = async (req, res, next) => {
  try {
    const result = await questionService.allQuestions();
    return res.status(200).send(result);
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
    const reply = await replyService.getReplyDetail(result.ID);
    // generate mail HTML
    const HTML = await emailTemplate('reply.ejs', {
      shareURL: reply.question.shareURL,
      userName: reply.user.name,
      trimText:
        reply.reply.length > 30 ? `${reply.reply.substr(0, 30)}` : reply.reply,
      isTrim: reply.reply.length > 30 ? true : false,
    });
    // send mail
    await sendMail(
      reply.user.email,
      'Someone reply to you | FORUM',
      HTML
    );
    return res.status(200).send(reply);
  } catch (error) {
    next(error);
  }
};

export const likeQuestion = async (req, res, next) => {
  try {
    const ID = req.query.ID;
    const result = await questionService.likeQuestion(ID);
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
