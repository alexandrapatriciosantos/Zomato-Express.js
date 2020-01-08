const mysql = require('mysql');
const keys = require('../keys');

const connection = mysql.createConnection({
  host: 'localhost',
  user: keys.MYSQL_USER,
  password: keys.MYSQL_PASSWORD,
  database: keys.MYSQL_DATABASE,
});

module.exports = connection;
