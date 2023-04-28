const mysql = require('mysql');
const config = require('../config.json');

const dbConnection = mysql.createConnection({ // Connect to database using info from a config file
    host: config.dbHost,
    port: config.dbPort,
    database: config.dbName,
    user: config.dbUsername,
    password: config.dbPassword,
    debug: false
});

module.exports = dbConnection;