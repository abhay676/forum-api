import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import { environment } from './config/environment.js';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transport = nodemailer.createTransport({
  service: environment.MAIL_SERVICE,
  auth: {
    user: environment.MAIL_USER,
    pass: environment.MAIL_PWD,
  },
});

export const emailTemplate = async (fileName, data) => {
  const html = await ejs.renderFile(
    path.join(__dirname, `views/${fileName}`),
    data
  );
  return html;
};

export const sendMail = async (to, subject, html) => {
  return transport.sendMail({
    from: environment.MAIL_USER,
    to,
    subject,
    html,
  });
};
