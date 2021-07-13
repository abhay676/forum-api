import db from '../../db/connection.js';

export const userService = {
  async signUp(data) {
    try {
      const result = await db.user.create(data);
      return result;
    } catch (error) {
      return error;
    }
  },
};
