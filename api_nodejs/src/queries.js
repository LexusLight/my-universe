const {Sequelize,Model} = require('sequelize');
const sequelize = new Sequelize('sqlite://database.db');
const {User,UserLink} = require('./models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const token = "3g5s-1g5g-64gj-3g73";

const registerUser = async (username,email,password) => {
    await sequelize.sync();
    let salt = await bcrypt.genSalt(10);
    let hash_password = await bcrypt.hash(password, salt);
    try {
        const user = await User.create({
            username: username,
            email: email,
            password: hash_password,
        });
    } catch (e){
        throw ("Данный пользователь уже существует");
    }
};

const authUser = async (username, password) => {
    await sequelize.sync();
    try {
        let user = await User.findOne({
            where:{
                username:username
            },
        });

        let new_hash = await bcrypt.hash(password, user.password);
        let db_hash = user.password;

        if( db_hash == new_hash){
            return (obj = {
                id: user.id,
                login: user.login,
                token: jwt.sign({ id: user.login }, token)
            })
        }else{
            return ("Пароли не совпадают");
        }
    }catch(e){
        return("Пользователь не найден");
    }
};

const addLink = async (username,url,link_name) => {
    await sequelize.sync();

    let user = await User.findOne(
        {where:{
            username:username
            },
        });

    const link = await UserLink.create({
        url: url,
        link_name: link_name,
        userId: user.id,
    });
    return link;
};

module.exports = {
    registerUser,
    authUser,
    addLink,
}