/**
 * Index router to handle proxying the request to individual modules
 */

const router = require('express').Router();
const bookmarkRouter = require('./bookmark');
const userRouter = require('./user');
const authRouter = require('./auth');

const authenticationMiddleware = require('../middlewares/authenticate');

module.exports = function(models, app) {
  router.use('/bookmark', authenticationMiddleware(app), bookmarkRouter(models));
  router.use('/user', userRouter(models));
  router.use('/auth', authRouter(models, app.get('superSecret')));

  return router;
}
