import ip from 'ip';
import { validationResult } from 'express-validator';
import { userService } from '../services/user.service.js';

export const signUp = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const body = {
      ...req.body,
      ipAddress: ip.address(),
      userAgent: req.useragent.source,
    };
    const result = await userService.signUp(body);
    return res.status(201).send(result);
  } catch (error) {
    error.statusCode = 409;
    next(error);
  }
};
