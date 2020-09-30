const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite://database.db');

class User extends Model {}
User.init(
    {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email:{
          type: DataTypes.STRING,
          unique:true,
          allowNull:true,
        },
        link: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            defaultValue: "@link",
        },
        status: {
            type: DataTypes.STRING,
        },
        vk: {
            type: DataTypes.STRING,
            defaultValue: "no vk"
        },
        deviantart: {
            type: DataTypes.STRING,
            defaultValue: "no deviantart"
        },
        furaffinity: {
            type: DataTypes.STRING,
            defaultValue: "no FA"
        },
        twitter: {
            type: DataTypes.STRING,
            defaultValue: "no twitter"
        },
        facebook: {
            type: DataTypes.STRING,
            defaultValue: "no facebook"
        },

    },
    { sequelize, modelName: 'user' }
    );

const register = async (username,realname) => {
    await sequelize.sync();
    const user = await User.create({
        username: username,
        realname: realname,
    });
};

module.exports = {
    register,
}