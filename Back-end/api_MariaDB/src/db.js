const sequelize = require('sequelize');
const database = new sequeliza('armazenagem', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});

database.sync();

module.exports = database;
