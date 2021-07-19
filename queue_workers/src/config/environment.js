import { config } from 'dotenv';

if (config().error) throw new Error('.env not found!');
export const environment = {
  PORT: process.env.PORT,
  MAIL_SERVICE: process.env.MAIL_SERVICE,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PWD: process.env.MAIL_PWD,
  QUEUE_URL: process.env.QUEUE_URL,
  QUEUE_NAME: process.env.QUEUE_NAME,
};
