import db from '../../db/connection.js';

export const channelService = {
  async newChannel(data) {
    try {
      const result = await db.channel.create(data);
      return result;
    } catch (error) {
      return error;
    }
  },
  async channelDetails(id) {
    try {
      const result = await db.channel.findOne({
        include: [
          {
            model: db.question,
            include: [
              {
                model: db.user,
              },
            ],
          },
        ],
        where: {
          ID: id,
        },
      });
      return result;
    } catch (error) {
      return error;
    }
  },
};
