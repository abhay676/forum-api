import { emailTemplate } from '../nodemailer.js';
export const generateHTML = async (data) => {
  switch (data.type) {
    case 'WELCOME':
      // call signUp template
      const HTML = await emailTemplate(`welcome.ejs`, {
        name: data.name,
      });
      return HTML;

    default:
      break;
  }
};
