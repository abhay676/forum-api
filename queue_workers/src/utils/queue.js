import amqp from 'amqplib';
import { environment } from '../config/environment.js';
export const queueConsumer = () => {
  return new Promise((resolve, reject) => {
    amqp
      .connect(environment.QUEUE_URL)
      .then((conn) => conn)
      .then((conn) => conn.createChannel())
      .then((channel) => {
        const queue = environment.QUEUE_NAME;
        let message = '';
        channel.assertQueue(queue, {
          durable: false,
        });
        console.log(
          ' [*] Waiting for messages in %s. To exit press CTRL+C',
          queue
        );
        channel.consume(
          queue,
          function (msg) {
            message = msg.content.toString();
            resolve(message);
          },
          {
            noAck: true,
          }
        );
      })
      .catch((err) => reject(err));
  });
};
