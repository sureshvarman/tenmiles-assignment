/**
 * MODELS - file which consolidate all the models
 * and take care of database connection
 */
const mongoose = require('mongoose');


/**
 * function to connect mongoose database
 * @return {Promise}
 */
function connectDB(config) {
  return new Promise((resolve, reject) => {
    function connect () {
      const options = { server: { socketOptions: { keepAlive: 1 } } };
      return mongoose.connect(config.db, options).connection;
    }

    return connect()
      .on('error', reject)
      .on('disconnected', connect)
      .once('open', function() {
        resolve({
          Bookmark: require('./bookmark.js'),
          User: require('./user.js')
        });
      });
  })
}

module.exports = {
  init: connectDB
}
