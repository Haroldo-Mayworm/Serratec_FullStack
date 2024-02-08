const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'blog', 'root', '', {
    host: 'localhost',
    dialect: 'MariaDB',
});

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
};
