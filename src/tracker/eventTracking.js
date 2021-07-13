import LoggerService from '../api/services/logger.service.js';
const logger = new LoggerService('app');

const eventLogTracker = function (req, res, next) {
  if (req.method === 'GET') {
    logger.setLogData(req.baseUrl);
    logger.info('API Method: GET ', req.params);
  } else {
    logger.setLogData(req.baseUrl);
    logger.info(`API Method: POST `, req.body);
  }
  next();
};

export default eventLogTracker;
