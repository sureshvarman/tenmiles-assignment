/**
 * ------------------------------------
 * API definitions for class bookmark
 * ------------------------------------
 */

const async = require('async');

/**
 * @class bookmark - defines model function, acts as a curry function
 * @prop {mongooseObject} models
 * @return {Object}
 */
var bookmark = function(models) {
  return {
    /**
     * function to create a bookmark record
     * @param {mongoose.Schema.Bookmark} data
     * @return {Promise}
     */
    create: function(data) {
      return models.Bookmark.create(data);
    },

    /**
     * function to get Bookmark record using id
     * @param {String} id
     * @return {Promise}
     */
    getById: function(id) {
      return models.Bookmark.findOne( { _id: id } );
    },

    /**
     * function to fetch Bookmark records using given optional tags
     * @param {Number} Integer optional
     * @param {Number} Integer optional
     * @param {String} tags optional
     * @return {Promise}
     */
    fetch: function(limit, offset, tags) {
      limit = limit > 0 ? limit : 1;
      offset = offset > -1 ? offset : 0;

      return new Promise((resolve, reject) => {
        var countQuery = function(callback) {
          var count = null;
          if (tags)
            count = models.Bookmark.count({ tags: { $all: tags.split(',') } });
          else
            count = models.Bookmark.count();

          count.then((data) => {callback(null, data)})
            .catch(callback);
        }

        var retrieve = function(callback) {
          var retrieve = null;
          if (tags)
            retrieve = models.Bookmark.find({ tags: { $all: tags.split(',') } });
          else
            retrieve = models.Bookmark.find();

          retrieve.skip(offset)
            .limit(limit)
            .exec(callback);
        }

        async.parallel([countQuery, retrieve], (err, data) => {
          if (err)
            reject(err);

          var response = {};
          response.nextLimit = limit;
          response.nextOffset = offset + limit;
          response.count = data[0];
          response.data = data[1];

          resolve(response);
        });
      });
    },

    /**
     * function to delete a bookmark record
     * @param {Number} id
     * @return {Promise}
     */
    deleteById: function(id) {
      return models.Bookmark.remove({ _id: id });
    }
  }
}

module.exports = {
  init: bookmark
}
