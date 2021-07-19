import amqp from 'amqplib';

import { environment } from '../../config/environment.js';

export const connection = (message) => {
  return new Promise((resolve, reject) => {
    amqp
      .connect(environment.QUEUE_URL)
      .then((conn) => conn)
      .then((conn) => conn.createChannel())
      .then((channel) => {
        const queueName = environment.QUEUE_NAME;
        channel.assertQueue(queueName, {
          durable: false,
        });
        channel.sendToQueue(queueName, Buffer.from(message));
        console.log(' [x] Sent %s', message, queueName);
      })
      .then((done) => resolve(true))
      .catch((err) => reject(err));
  });
};
