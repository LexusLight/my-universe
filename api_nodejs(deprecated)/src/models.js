const { Model, DataTypes } = require('sequelize');
const {sequelize} = require('./database')

class User extends Model {}
User.init(
    {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        img_url:{
            type: DataTypes.STRING,
            allowNull:false,
            defaultValue:'/default/def.img'
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            defaultValue: "@user"+Math.round(Math.random() * 100000),
            allowNull: false
        },
        email:{
          type: DataTypes.STRING,
          unique:true,
          allowNull:false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },
    { sequelize, modelName: 'user' }
    );

class UserLink extends Model {}
UserLink.init(
    {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        url: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        link_name:{
            type: DataTypes.STRING,
            unique:false,
            allowNull:true,
        },
    },
    { sequelize, modelName: 'user_link' }
);

class Character extends Model{}
Character.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:false,
        },
        avatar:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull:false,
            defaultValue:21,
        },
        sex:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Male",
        },
        full_name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        about:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        likes:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        dislikes:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        reference:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        quote:{
            type: DataTypes.STRING,
            allowNull:true
        }
    },
    {sequelize, modelName:'character'}
);

class UserArt extends Model{}
UserArt.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        img_name:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "image"+this.id,
        },
        img_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

    },
    {sequelize, modelName:'user_art'}
);

User.hasMany(UserLink, {onDelete: "cascade"});
User.hasMany(Character, {onDelete: "cascade"});
User.hasMany(UserArt);

UserArt.hasMany(Character);

module.exports = {
    User,
    UserLink,
    Character,
    UserArt,
}
