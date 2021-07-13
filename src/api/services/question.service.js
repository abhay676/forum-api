import db from '../../db/connection.js';
import { generateShareLink } from '../utils/generateMeta.js';
export const questionService = {
  async newQuestion(data) {
    try {
      [data.shareURL, data.shareID] = await generateShareLink();
      const result = await db.question.create(data);
      return result;
    } catch (error) {
      return error;
    }
  },
  async allQuestions() {
    try {
      const question = await db.question.findAll({
        include: [
          {
            model: db.channel,
          },
          {
            model: db.user,
          },
          {
            model: db.answer,
            include: [{ model: db.reply }],
          },
          { model: db.reply, include: [{ model: db.user }] },
        ],
      });
      return question;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  async questionDetail(redirect, ID) {
    try {
      let ques, whereCond;
      if (redirect) {
        whereCond = {
          shareID: ID,
        };
      } else {
        whereCond = {
          ID,
        };
      }
      ques = await db.question.findOne({
        where: whereCond,
        include: [
          {
            model: db.answer,
            include: [{ model: db.reply }],
          },
          { model: db.user },
          { model: db.reply, include: [{ model: db.user }] },
        ],
      });

      return ques;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  async likeQuestion(ID) {
    try {
      await db.question.increment({ likes: 1 }, { where: { ID } });
      return await db.question.findOne({ where: { ID } });
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
