const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('config');
const cors = require('cors');
const path = require('path');
const initDatabase = require('./db/initDatabase');

const router = require('./routes');

const app = express();

initDatabase();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/server', router);

if (config.get('server.nodeEnv') === 'development') {
  app.use(cors());
} else {
  app.use(express.static(path.join(__dirname, './../frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  });
}

module.exports = app;
