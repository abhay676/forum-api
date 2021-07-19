import db from '../../db/connection.js';
import { CustomError } from '../utils/CustomError.js';
import { environment } from '../../config/environment.js';
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
  async userDetails(ID) {
    try {
      const result = await db.user.findOne({
        where: {
          ID,
        },
        include: [{ model: db.question }, { model: db.answer }],
      });
      return result;
    } catch (error) {
      const key = Object.keys(err.fields);
      const value = Object.values(err.fields);
      throw new CustomError(409, value[0], `${key[0]} not found`);
    }
  },
  async dashboard() {
    try {
      // channels details
      const channels = await db.channel.findAll({
        where: {
          status: environment.ACTIVE,
        },
      });
      // questions with user detail and sort based on createdAt
      const questions = await db.question.findAll({
        where: {
          status: environment.ACTIVE,
        },
        include: [{ model: db.reply }],
        order: [['createdAt', 'asc']],
        limit: 10,
      });
      // count of questions
      const totalCount = await db.question.count({
        where: { status: environment.ACTIVE },
        distinct: true,
      });
      return {
        channels,
        questions,
        totalCount,
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  async findUserByEmail({email}) {
    try {
      const user = await db.user.findOne({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      return error;
    }
  },
};
