const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('config');
const cors = require('cors');
const initDatabase = require('./db/initDatabase');

const router = require('./routes');

const app = express();

initDatabase();

if (config.get('server.nodeEnv') === 'development') {
  app.use(cors());
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/server', router);

module.exports = app;
