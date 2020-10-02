const connection = require('../connection');

const employee = (answers) => {
      const query = "INSET INTO employee SET ?;";
      connection.query(query, function (error, results) {
        if (error) throw error;
        console.log(results);
      });
};

module.exports = employee;