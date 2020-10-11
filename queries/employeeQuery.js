const connection = require('../connection');

const employee = (answers) => {
      const query = "INSERT INTO employees SET ?;";
      connection.query(query, answers, function (error, results) {
        if (error) throw error;
        console.log(results);
      });
};

module.exports = employee;