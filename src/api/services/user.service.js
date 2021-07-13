import db from '../../db/connection.js';
import { CustomError } from '../utils/CustomError.js';
export const userService = {
  async signUp(data) {
    try {
      const result = await db.user.create(data);
      return result;
    } catch (err) {
        const key = Object.keys(err.fields);
        const value = Object.values(err.fields);
      throw new CustomError(409, value[0], `${key[0]} already exists`);
    }
  },
};
