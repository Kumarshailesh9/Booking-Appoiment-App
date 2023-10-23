const Sequelize = require('sequelize');

const sequelize = new Sequelize ({
    database : 'sys',
    username : 'root',
    password : 'Realme@333',
    host : 'localhost',
    dialect : 'mysql'
});

module.exports = sequelize;