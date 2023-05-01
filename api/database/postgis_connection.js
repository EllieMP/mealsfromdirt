const config = require('../config.json');
const { Pool } = require('pg');

const dbConnection = new Pool({
    user: config.pgUser,
    host: config.pgHost,
    database: config.pgDatabase,
    password: config.pgPassword, // Password is empty be default
    port: config.pgPort, // Default port
});

module.exports = dbConnection;