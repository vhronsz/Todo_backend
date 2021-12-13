const mysql = require("mysql");
const host = "localhost";
const user = 'root';
const password = '';
const database = 'todo';

let connection = mysql.createConnection(
{
    host: host,
    user: user,
    password: password,
    database: database
});
connection.connect(function(error){
    if(!!error){
      console.log(error);
    }
  });
module.exports = connection;