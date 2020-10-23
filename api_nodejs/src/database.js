const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('sqlite://database.sqlite3');
sequelize.sync().then();

module.exports ={
    sequelize,
}