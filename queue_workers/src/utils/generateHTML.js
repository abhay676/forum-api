import { emailTemplate } from '../nodemailer.js';
export const generateHTML = async (data) => {
  let HTML = '';
  switch (data.type) {
    case 'WELCOME':
      // call signUp template
      HTML = await emailTemplate(`welcome.ejs`, {
        name: data.name,
      });
      return HTML;
    case 'LOGIN':
      HTML = await emailTemplate('otp.ejs', {
        OTP: data.OTP,
        IP: data.IP,
        userAgent: data.userAgent,
        userName: data.userName,
      });
      return HTML;
    default:
      return HTML;
  }
};
