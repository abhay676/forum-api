import { WELCOME_MAIL, LOGIN_MAIL } from './queueMessages.js';
export const generateQueueMessage = (type, sendTo, subject, data) => {
  let message = {
    To: sendTo,
    subject,
    type,
  };
  switch (type) {
    case WELCOME_MAIL:
      let name = `${data.name}`;
      message['name'] = name;
      return message;
    case LOGIN_MAIL:
      let { otp, ip, userAgent, userName } = data;
      message['OTP'] = otp;
      message['IP'] = ip;
      message['userAgent'] = userAgent;
      message['userName'] = userName;
      return message;
    default:
      return message;
  }
};
