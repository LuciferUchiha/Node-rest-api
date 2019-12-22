const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'restApiUser',
    password: '1234',
    database: 'restapi'
})

const getConnection = () => {
    return pool
}

module.exports = getConnection;