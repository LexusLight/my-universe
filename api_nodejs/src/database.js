const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('sqlite://database.db');
sequelize.sync().then();

module.exports ={
    sequelize,
}