var models = require('../models');

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get((err, message) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.send(message);
        }
      });
    },
    post: function(req, res) {
      var message = req.body;

      models.messages.post(message, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.sendStatus(201);
        }
      });
    }
  },

  users: {
    get: function(req, res) {
      models.users.get(function(err, results) {
        if (err) {
          res.send(err);
        }
        res.json(results);
      });
    },
    post: function(req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        if (err) {
          res.send(err);
        }
        res.sendStatus(201);
      });
    }
  }
};
