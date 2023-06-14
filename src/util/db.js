var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fashionct'
});

module.exports = conn;
