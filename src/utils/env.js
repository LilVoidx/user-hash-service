require('dotenv').config();

const ENV = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
  LOG_LEVEL: process.env.LOG_LEVEL,
};

if (!ENV.MONGO_URI) {
  throw new Error(
    'Missing (MONGO_URI) in environment variables please check and try again...'
  );
}

module.exports = ENV;
