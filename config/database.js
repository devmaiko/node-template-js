const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydatabase', 'myuser', 'mypassword', {
    host: 'localhost',
    dialect: 'postgres'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
    module.exports = sequelize;
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

