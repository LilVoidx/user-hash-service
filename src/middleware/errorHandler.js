const logger = require('../utils/logger.js');

const errorHandler = (err, req, res, next) => {
  logger.error(err.message || 'unknown error occurred');

  res.status(500).json({
    error: err.message || 'Internal Server Error',
  });
};

module.exports = errorHandler;
