const {User,Character,UserLink} = require('./models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenkey = "3g5s-1g5g-64gj-3g73";

const registerUser = async (username,email,password,img_url) => {
    let salt = await bcrypt.genSalt(10);
    let hash_password = await bcrypt.hash(password, salt);
    try {
        await User.create({
            username: username,
            email: email,
            password: hash_password,
            img_url: img_url,
        });
    } catch (e){
        throw ("Имя пользователя или почта уже существуют.");
    }
};

const authUser = async (username, password) => {
    const user = await User.findOne({
            where:{
                username:username
            },
        })
    if(user === null){
        throw ("Пользователя не существует");
    }
    const new_hash = await bcrypt.hash(password, user.password)

    if(user.password === new_hash){ //сравниваем хеш с новым хешом
        const token = jwt.sign({ id: user.id, username: user.username }, tokenkey);

        const auth_obj = {
            username: user.username,
            token: token,
        }
        return(auth_obj);
    }else{
        throw ("Пароль введён неверно");
    }
};

const addCharacter = async (name, about, token) => {
    const token_obj = jwt.decode(token,tokenkey);
    const user = await User.findOne({
            where:{
                id: token_obj.id,
                username: token_obj.username,
            },
        });
    if(user === null){
        throw("Невалидный токен")
    }else{
        const character = await Character.create({
            name: name,
            about: about,
            userId: user.id,
        })
        return(character)
    }

};

const addLink = async (username,url,link_name,token) => {
    const token_obj = jwt.decode(token,tokenkey);

    let user = await User.findOne(
        {where:{
            id: token_obj.id,
            username: token_obj.username,
            },
        });

    if(user === null){
        throw("Невалидный токен")
    }else {
        const link = await UserLink.create({
            url: url,
            link_name: link_name,
            userId: user.id,
        });
        return link;
    }
};

module.exports = {
    registerUser,
    authUser,
    addLink,
    addCharacter,
}