var db = require('../db/index.js').connection;
// var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function(callback) {
      // debugger;
      // db.queryAsync = Promise.promisify(db.query);
      db.query('SELECT * FROM Messages', (error, data) => {
        if (error) {
          callback(error);
        } else {
          callback(null, data);
        }
      });
    }, // a function which produces all the messages

    post: function({ messages, username, roomname }, callback) {
      db.query(
        'INSERT INTO Messages (messages, username, roomname) VALUES (? , ? , ?)',
        [messages, username, roomname],
        (error, data) => {
          if (error) {
            callback(error);
          } else {
            callback(null, data);
          }
        }
      );
      // db.query -- SQL - insert
      // /  db.update - update field
      // upsert - if row doesn't exist - it inserts
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(callback) {
      db.query('SELECT name FROM Users', (error, data) => {
        if (error) {
          callback(error);
        } else {
          callback(data);
        }
      });
    },

    post: function(callback) {
      db.query(
        'INSERT INTO Messages (messages, userID, roomID)',
        (err, results) => {
          if (err) {
            callback(err);
          } else {
            callback(results);
          }
        }
      );
    }
  }
};

// module.exports.messages.post(
//   { message: 'Hi', username: 'Jesse', roomname: 'Lobby' },
//   (error, data) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log(data);
//     }
//   }
// );

//db.query.... - MDN

// return db.queryAsync('SELECT * FROM Messages').then(data => {
//   console.log(data);
// });
// db.queryAsync = Promise.promisify(db.query);
// // db.queryAsync('SELECT)

// PROMISIFICATION: return db.query
//  db.queryAsync = function(...args ){ //q, ayncargs,
//   return new Promise((resolve, reject) => {
//     db.query(...args, ((err, results) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results);
//       }
//     }))
//   })
// }   //---- db.queryAsync

// // can abstract out fn and set equal to promisify
// var promisify = function(func) {
//   return function(...args ){ //q, ayncargs,
//     return new Promise((resolve, reject) => {
//       func(...args, ((err, results) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(results);
//         }
//       }))
//     })
// }

// (first arg is string - represents SQL command)
// (second arg is callback (err, result)
// SQL - select
