import { WELCOME_MAIL } from './queueMessages.js';
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
    default:
      break;
  }
};
