import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import useragent from 'express-useragent';
import router from './router/routes.js';
import connection from './db/connection.js';
import eventLogTracker from './tracker/eventTracking.js';
export const app = express();

(async function () {
  app.use(express.json());
  app.use(useragent.express());
  app.use(cors());
  app.use(helmet());
  app.use(eventLogTracker);
  app.use(router);
  await connection.sequelize.sync({ logging: false });
})();
