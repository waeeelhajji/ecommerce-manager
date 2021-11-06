var mysql = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'student',
  password : 'student',
  database: 'ProductManagmentService'
});

module.exports = connection;







