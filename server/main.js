/**
 *
 */

const express = require('express');
const compress = require('compression');
const logger = require('../build/lib/logger');
const bodyParser = require('body-parser');

const app = express()
app.use(compress())
app.use(bodyParser.json())

const config = require('./config');
const apiServer = require('./api-server.js');
const webpackServer = require('./webpack-server.js');
const models = require('./models');

models.init(config)
  .then((database) => {
    app.set('superSecret', config.secret);
    apiServer.init(app, database, logger);
    // webpackServer.init(app, logger);
  });

module.exports = app;
