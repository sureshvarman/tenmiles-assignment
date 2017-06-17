/**
 * router which only takes care of the bookmark apis and endpoints
 * @prop {mongoose.Schema.Object} models
 */

const router = require('express').Router();

module.exports = function(models) {
  const bookmarkAPI = require('../api/bookmark').init(models);

  router.get('/:id', (req, res) => {
    bookmarkAPI.getById(req.params.id)
      .then((result) => {
        if (!result)
          return res.status(404).json();

        res.json(result);
      })
      .catch((err) => {
        res.status(406).json(err);
      })
  });

  router.get('/', (req, res) => {
    bookmarkAPI.fetch(parseInt(req.query.limit), parseInt(req.query.offset), req.query.tag)
      .then((result) => {
         var response = {
           meta: {
             next: result.nextOffset < result.count ? req.originalUrl.split('?')[0] + '?limit=' + result.nextLimit + '&offset=' + result.nextOffset : ''
           },
           data: result.data
         };
        res.json(response);
      })
      .catch((err) => {
        res.status(406).json(err)
      })
  });

  router.post('/', (req, res) => {
    bookmarkAPI.create(req.body)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.status(406).json(err);
      })
  });

  router.delete('/:id', (req, res) => {
    bookmarkAPI.deleteById(req.params.id)
      .then((result) => {
        if (result && result.n)
          return res.json(result);

        res.status(404).json();
      })
      .catch((err) => {
        res.status(406).json(err);
      });
  });

  router.put('/:id', (req, res) => {
    bookmarkAPI.updateById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(406).json(err);
    });
  })


  return router;
}
