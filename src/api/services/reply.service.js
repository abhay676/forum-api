import db from '../../db/connection.js';

export const replyService = {
  async addReply(data) {
    try {
      const reply = await db.reply.create(data);
      return reply;
    } catch (error) {
      return error;
    }
  },
  async getReplyDetail(ID) {
    try {
      const reply = await db.reply.findOne({
        where: {
          ID,
        },
        include: [
          {
            model: db.user,
          },
          {
            model: db.question,
          },
        ],
      });
      return reply;
    } catch (error) {
      return error;
    }
  },
};
