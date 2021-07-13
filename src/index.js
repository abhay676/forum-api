import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import ip from 'ip';
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
  // route-handler
  app.all('*', (req, res, next) => {
    const origin = ip.address();
    const err = new Error(`Can't find ${req.originalUrl}`);
    err.status = false;
    err.statusCode = 404;
    err.origin = origin;
    next(err);
  });
  // global error handler
  app.use((err, req, res, next) => {
    let errors = [],
      errObj = {};
    const origin = ip.address();
    errObj.message = err.message;
    errObj.value = err.value;
    errObj.location = err.location || 'APP_INTERNAL';
    errObj.origin = origin;
    errors.push(errObj);
    res.status(err.statusCode).json({
      status: false,
      errors,
    });
  });

  await connection.sequelize.sync({ logging: false });
})();
