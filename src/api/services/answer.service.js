import db from '../../db/connection.js';
import { likeAnswer } from '../controllers/answer.controller.js';

export const answerService = {
  async addAnswer(data) {
    try {
      const result = await db.answer.create(data);
      return result;
    } catch (error) {
      return error;
    }
  },
  async acceptAnswer(ID) {
    try {
      db.answer
        .findOne({
          where: {
            ID,
          },
        })
        .then((answer) => {
          return answer.update({ isAccepted: true });
        });
    } catch (error) {
      return error;
    }
  },

  async likeAnswer(ID) {
    try {
      const result = await db.answer.increment(
        {
          likes: +1,
        },
        {
          where: {
            ID,
          },
        }
      );
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
