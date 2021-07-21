import { config } from 'dotenv';

if (config().error) throw new Error('.env not found!');
export const environment = {
  IS_PROD: process.env.IS_PROD,
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE,
  DB_USERNAME: process.env.DB_USER,
  DB_PWD: process.env.DB_PWD,
  DB_HOST: process.env.HOST,
  JWT_SECRET: process.env.JWT_SECRET,
  IMAGEKIT_PUBLIC_KEY: process.env.IMAGEKIT_PUBLIC_KEY,
  IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
  MAIL_SERVICE: process.env.MAIL_SERVICE,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PWD: process.env.MAIL_PWD,
  QUEUE_URL: process.env.QUEUE_URL,
  QUEUE_NAME: process.env.QUEUE_NAME,
  JWT_SECRET_EXPIRE_IN: '1 days',
  ACTIVE: '1',
  INACTIVE: '0',
  DELETED: '2',
  TYPE_QUESTION: '0',
  TYPE_ANSWER: '1',
};
