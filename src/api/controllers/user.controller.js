import ip from 'ip';
import { validationResult } from 'express-validator';
import { userService } from '../services/user.service.js';
import { OTPService } from '../services/otp.service.js';
import { sendResponse } from '../utils/Response.js';
import {
  USER_CREATED,
  USER_CREATED_ERROR,
  USER,
  LOGIN,
  LOGIN_ERROR,
} from '../utils/Messages.js';
import { connection } from '../utils/queue.js';
import { generateQueueMessage } from '../utils/generateQueueMsg.js';
import {
  WELCOME_MAIL,
  WELCOME_MAIL_SUBJECT,
  LOGIN_MAIL,
  LOGIN_MAIL_SUBJECT,
} from '../utils/queueMessages.js';
export const signUp = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendResponse(res, 400, USER_CREATED_ERROR, null, errors.array());
    }
    const body = {
      ...req.body,
      ipAddress: ip.address(),
      userAgent: req.useragent.source,
    };
    const result = await userService.signUp(body);
    // generate queue message
    const message = generateQueueMessage(
      WELCOME_MAIL,
      result.email,
      WELCOME_MAIL_SUBJECT,
      result
    );
    // connect to queue
    const channel = await connection(JSON.stringify(message));
    if (!channel) console.log('ERROR: not able to send message');
    return sendResponse(res, 201, USER_CREATED, result, null);
  } catch (error) {
    error.statusCode = 409;
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendResponse(res, 400, LOGIN_ERROR, null, errors.array());
    }
    const result = await userService.findUserByEmail(req.body);
    if (result) {
      const otpResult = await OTPService.generateOTP(req.body);
      const userAgent = req.useragent.source;
      // send IP Address, UserAgent with OTP
      const message = generateQueueMessage(
        LOGIN_MAIL,
        result.email,
        LOGIN_MAIL_SUBJECT,
        {
          ip: ip.address(),
          userAgent,
          otp: otpResult.otp,
          userName: result.name,
        }
      );
      // connect to queue
      const channel = await connection(JSON.stringify(message));
      if (!channel) console.log('ERROR: not able to send message');
    }
    return sendResponse(res, 200, LOGIN, null, null);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const verifyOTP = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendResponse(res, 400, LOGIN_ERROR, null, errors.array());
    }
    const [result, userID] = await OTPService.verifyOTP(req.body.code);
    if (result) {
      const user = await userService.userDetails(userID);
      return sendResponse(res, 200, 'Success', user, null);
    }
  } catch (error) {
    next(error);
  }
};

export const user = async (req, res, next) => {
  try {
    const ID = req.query.ID;
    const result = await userService.userDetails(ID);
    return sendResponse(res, 200, USER, result, null);
  } catch (error) {
    error.statusCode = 404;
    next(error);
  }
};
export const userDashboard = async (req, res, next) => {
  try {
    const result = await userService.dashboard();
    return sendResponse(res, 200, 'success', result, null);
  } catch (error) {
    next(error);
  }
};
