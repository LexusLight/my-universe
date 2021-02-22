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
        img_url:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:false,
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull:false,
            defaultValue:21,
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:"unknown",
        },
        about:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        quote:{
            type: DataTypes.STRING,
            allowNull:true
        }
    },
    {sequelize, modelName:'character'}
)

class CharacterImage extends Model{}
CharacterImage.init(
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
    },
    {sequelize, modelName:'character_image'}
)

class Test extends Model {}
Test.init(
    {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        word: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        text:{
            type: DataTypes.STRING,
            unique:false,
            allowNull:true,
        },
    },
    { sequelize, modelName: 'test' }
);


User.hasMany(UserLink, {onDelete: "cascade"});
User.hasMany(Character, {onDelete: "cascade"});
Character.hasMany(CharacterImage, {onDelete:"cascade"});

module.exports = {
    User,
    UserLink,
    Character,
    Test,
}
