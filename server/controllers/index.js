var models = require('../models');

module.exports = {
  messages: {
    get: function(req, res) {
      // models.messages.get();
      // console.log(res);
      models.messages.get((err, message) => {
        if (err) {
          res.sendStatis(500);
          //     console.log('error: ', err);
        } else {
          res.send(message);
        }
      });
      // models.messages.get().then(results => res.send(results)
      // ex: callback(models.messages.get)?
      // res.send
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      // console.log('HERE THIS IS ', req.body);
      var message = req.body;

      models.messages.post(message, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      });
      // res.status - set status
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {},
    post: function(req, res) {}
  }
};
// module.exports.messages.get();
