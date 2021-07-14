import ip from 'ip';
import { validationResult } from 'express-validator';
import { userService } from '../services/user.service.js';
import { sendResponse } from '../utils/Response.js';
import { USER_CREATED, USER_CREATED_ERROR, USER } from '../utils/Messages.js';

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

export const user = async (req, res, next) => {
  try {
    const ID = req.query.ID
    const result = await userService.userDetails(ID)
    return sendResponse(res, 200, USER, result, null)
  } catch (error) {
    error.statusCode = 404
    next(error)
  }
}