const connectDB = require('./src/config/database.js');
const app = require('./src/app.js');
const ENV = require('./src/utils/env.js');
const logger = require('./src/utils/logger.js');

(async function startServer() {
  try {
    await connectDB();
    const PORT = ENV.PORT || 3000;
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    if (error.code === 'EADDRINUSE') {
      logger.error(`Port ${PORT} is already in use.`);
    } else {
      logger.error('Error starting the server:', error.message);
    }
    process.exit(1);
  }
})();
