import express from 'express';
import { queueConsumer } from './utils/queue.js';
import { generateHTML } from './utils/generateHTML.js';
import { sendMail } from './nodemailer.js';
export const app = express();

(async function () {
  // send mail
  const data = await queueConsumer();
  if (data) {
    // generate HTML
    const HTML = await generateHTML(JSON.parse(data));
    // send mail
    const parsedData = JSON.parse(data);
    const { To, subject } = parsedData;
    await sendMail(To, subject, HTML);
    console.log('SEND');
  }
})();
