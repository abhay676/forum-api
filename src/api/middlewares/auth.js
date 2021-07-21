import jwt from 'jsonwebtoken';
import { environment } from '../../config/environment.js';
import { userService } from '../services/user.service.js';
import { CustomError } from '../utils/CustomError.js';
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');

    let decoded = await jwt.verify(token, environment.JWT_SECRET);

    if (decoded) {
      // find user by userID and attached to req object as user
      const { userID } = decoded;
      const user = await userService.userDetails(userID);
      if (!user) {
        res.status(404).send({
          status: false,
          errors: [
            {
              message: 'token was wrong',
              value: 'token',
              origin: req.originalUrl,
            },
          ],
        });
      }
      if (user) {
        req.user = user;
        req.userID = user.ID;
        next();
      }
    } else {
      throw new CustomError(
        404,
        'Authorization is required',
        'Not Authorized',
        'AUTH'
      );
    }
  } catch (error) {
    res.status(404).send({
      status: false,
      errors: [
        {
          message:
            error.message ||
            error.message === "Cannot read property 'replace' of undefined"
              ? 'Authorization is required'
              : error.message,
          value: 'token',
          origin: req.originalUrl,
        },
      ],
    });
  }
};
