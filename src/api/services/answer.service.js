import db from '../../db/connection.js';

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
      await db.answer.increment(
        {
          likes: +1,
        },
        {
          where: {
            ID,
          },
        }
      );
      const answer = await db.answer.findOne({
        where: {
          ID,
        },
      });
      return answer;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  async deleteAnswer(ID) {
    try {
      await db.answer.destroy({
        where: {
          ID,
        },
      });
      return {
        deleted: true,
      };
    } catch (error) {
      return error;
    }
  },
};
