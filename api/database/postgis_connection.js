const config = require('../config.json');
const { Pool } = require('pg');

const dbConnection = new Pool({
    user: config.pgUser,
    host: config.pgHost,
    database: config.pgDatabase,
    password: config.pgPassword,
    port: config.pgPort,
});

module.exports = dbConnection;