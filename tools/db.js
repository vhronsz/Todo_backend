const mysql = require("mysql");
const host = "localhost";
const user = 'root';
const password = '';
const database = 'todo';

const connection = mysql.createConnection(
{
    host: host,
    user: user,
    password: password,
    database: database
});

connection.connect();

module.exports = connection;