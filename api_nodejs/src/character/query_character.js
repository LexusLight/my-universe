const {User,Character} = require('../models');
const jwt = require('jsonwebtoken');
const tokenkey = "3g5s-1g5g-64gj-3g73";

const addCharacter = async (name, img_url, about, token) => {
    const token_obj = jwt.decode(token,tokenkey);
    const user = await User.findOne({
        where:{
            id: token_obj.id,
            username: token_obj.username,
            }
        });

    if(user === null){
        throw("Невалидный токен");
    }else{
        const character = await Character.create({
            name: name,
            about: about,
            img_url: img_url,
            userId: user.id,
        });
        return(character);
    }
};

const editCharacter = async (name, img_url, about, token) => {
    const token_obj = jwt.decode(token,tokenkey);
    const user = await User.findOne({
        where:{
            id: token_obj.id,
            username: token_obj.username,
        }
    });

    const character = await Character.findOne({
        where:{
            name:name,
            userId: user.id,
        }
    })

    if(user === null){
        throw("Невалидный токен");
    }else if(character === null){
        throw("Персонажа не существует");
    }
    else{
        await character.update({
            name:name,
            about:about,
            img_url:img_url,
        })
        return(character);
    }
};

const characterList = async(username) => {
    const user = await User.findOne({
        where:{
            username:username,
        },
    });
    const characters = await Character.findAll({
        where:{
            userId: user.id,
        },
        attributes: ['id','name','age','gender','about','img_url']
    });
    return characters;
}

const imageCharacter = async(id) => {
    const character = await Character.findOne({
        where:{
            id: id,
        }
    });
    const img_url = character.img_url;
    return(img_url);
}
module.exports = {
    addCharacter,
    editCharacter,
    characterList,
    imageCharacter,
}