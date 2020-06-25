// require our connection file
const connection = require("./connection");

const orm = {
    selectAll: (tableInput, cb) => {
      const queryString = "SELECT * FROM ";
      queryString += tableInput
      queryString += ";"
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: (tableInput, col1, col2, val1, val2, cb) => {
      const queryString = "INSERT INTO " + tableInput + " (??, ??) VALUES (?, ?)";
      connection.query(queryString, [col1, col2, val1, val2], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    updateOne: (tableInput, col1, val1, col2, val2, id, cb) => {
      const queryString = "UPDATE " + tableInput + " SET ?? = ?, ?? = ? WHERE id = ??"
      connection.query(queryString, [col1, val1, col2, val2, id], function(err, result) {
          if (err) throw err;
          cb(result);
        }
      );
    }
  };
  
  module.exports = orm;