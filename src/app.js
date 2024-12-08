const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler.js');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

// index route
app.get('/', (req, res) => {
  res.json({
    message: 'User Management Service',
  });
});

app.use('/api/users', userRoutes);
app.use(errorHandler);

module.exports = app;
