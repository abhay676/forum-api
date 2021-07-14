import sequelizeRoot, { Sequelize } from 'sequelize';
import channelModel from '../api/models/channel.model.js';
import questionModel from '../api/models/question.model.js';
import userModel from '../api/models/user.model.js';
import answerModel from '../api/models/answer.model.js';
import replyModel from '../api/models/replies.model.js';
import { environment } from '../config/environment.js';
const { DataTypes } = sequelizeRoot;
const db = {};
let sequelize;
sequelize = new Sequelize(
  environment.DATABASE,
  environment.DB_USERNAME,
  environment.DB_PWD,
  {
    host: environment.DB_HOST,
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);
db.sequelize = sequelize;
db.DataTypes = DataTypes;

db.channel = channelModel(sequelize, DataTypes);
db.question = questionModel(sequelize, DataTypes);
db.user = userModel(sequelize, DataTypes);
db.answer = answerModel(sequelize, DataTypes);
db.reply = replyModel(sequelize, DataTypes);

// Channel Associations
db.channel.hasMany(db.question, {
  onDelete: 'cascade',
});
// User Association
db.user.hasMany(db.question, {
  onDelete: 'cascade',
});
db.user.hasMany(db.answer, {
  onDelete: 'cascade',
});
db.user.hasMany(db.reply, {
  onDelete: 'cascade',
});
// Question Association
db.question.belongsTo(db.channel, {
  onDelete: 'cascade',
});
db.question.belongsTo(db.user, {
  onDelete: 'cascade',
});
db.question.hasMany(db.answer, {
  onDelete: 'cascade',
});
db.question.hasMany(db.reply, {
  onDelete: 'cascade',
});
// Answer Association
db.answer.belongsTo(db.user);
db.answer.belongsTo(db.question);
db.answer.hasMany(db.reply, {
  onDelete: 'cascade',
});

// Replies Associations
db.reply.belongsTo(db.question);
db.reply.belongsTo(db.answer);
db.reply.belongsTo(db.user);
export default db;
