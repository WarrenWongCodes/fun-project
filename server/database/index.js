const mysql = require('mysql2');

// create a connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password123',
});

// expose promise object of mySQL2
connection
  .promise()
  .query('CREATE DATABASE IF NOT EXISTS funproject')
  .then(() => {
    console.log(
      'successfully created database, connected as id ' + connection.threadId
    );
  })
  .catch((err) => {
    console.error('error connecting: ' + err.stack);
    return;
  });

module.exports = connection;
