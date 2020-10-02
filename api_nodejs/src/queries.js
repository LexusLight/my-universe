const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('sqlite://database.db');
const {User,UserLink} = require('./models')

const registerUser = async (username,email) => {
    await sequelize.sync();
    const user = await User.create({
        username: username,
        email: email,

    });
    return user;
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
    addLink,
}