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

class Person_OC extends Model{}
Person_OC.init(
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
    {sequelize, modelName:'person_oc'}
)

class PersonImage extends Model{}
PersonImage.init(
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
    {sequelize, modelName:'person_image'}
)

User.hasMany(UserLink, {onDelete: "cascade"});
User.hasMany(Person_OC, {onDelete: "cascade"});
Person_OC.hasMany(PersonImage, {onDelete:"cascade"});

sequelize.sync();

module.exports = {
    User,
    UserLink,
}
