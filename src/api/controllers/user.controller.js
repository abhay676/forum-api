import ip from 'ip';
import { validationResult } from 'express-validator';
import { userService } from '../services/user.service.js';
import { sendResponse } from '../utils/Response.js';
import { USER_CREATED, USER_CREATED_ERROR } from '../utils/Messages.js';

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
    return sendResponse(res, 201, USER_CREATED, result, null);
  } catch (error) {
    error.statusCode = 409;
    next(error);
  }
};
