const {User,UserLink} = require('../models');
const bcrypt = require('bcrypt');
const {tokenDecode,tokenSign} = require('./webtoken');

//Регистрация профиля
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

//Авторизация юзера
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
        const token = tokenSign({ id: user.id, username: user.username });

        const auth_obj = {
            username: user.username,
            token: token,
        }
        return(auth_obj);
    }else{
        throw ("Пароль введён неверно");
    }
};


//Подгрузка аватарки
const getAvatar = async(username)=>{
    const user = await User.findOne({
        where:{
            username:username,
        },
    })
    const img_url_object = {
        img_url:"/user/user_avatars/"+user.img_url,
    }
    return(img_url_object)
}

//Редактирование профиля
const editUser = async(username,password,token) => {
    const token_obj = tokenDecode(token);
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);
    const user = await User.findOne({
        where:{
            id: token_obj.id,
            username: token_obj.username,
        },
    });
    if(user === null){
        throw('Невалидный токен');
    }else{
        await user.update({
            username: username,
            password: hash_password,
        });
    }
}

//Добавление линка
const addLink = async (username,url,link_name,token) => {
    const token_obj = tokenDecode(token);
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
    getAvatar,
    editUser,
    addLink,
}