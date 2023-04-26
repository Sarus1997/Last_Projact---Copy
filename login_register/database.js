//connect to database
const mongoose = require('mongoose');
const dbConnection = mongoose.createpool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'nodejs_login'
}).promise()

module.exports = dbConnection;