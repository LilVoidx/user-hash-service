const mongoose = require('mongoose');
const ENV = require('../utils/env.js');
const logger = require('../utils/logger.js');

const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    logger.info('Database connected');
  } catch (err) {
    logger.error(`Database connection failed: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
