const {User,Character} = require('../models');
const {tokenDecode} = require('../user/webtoken');

const addCharacter = async (name, img_url, about, token) => { //Добавить персонажа
    const token_obj = tokenDecode(token);
    const user = await User.findOne({
        where:{
            id: token_obj.id,
            username: token_obj.username,
            }
        });

    if(user === null){
        throw("Невалидный токен");
    }else{
        let character = await Character.findOne({
            where:{
                name:name,
                userId: user.id,
            }
        });
        if(character != null){
            throw('Персонаж с таким именем уже существует в вашей вселенной!');
        }else{
            character = await Character.create({
                name: name,
                about: about,
                img_url: img_url,
                userId: user.id,
            });
            return(character);
        }

    }
};

const editCharacter = async (name, img_url, about, token) => { //Редактировать персонажа
    const token_obj = tokenDecode(token);
    const user = await User.findOne({
        where:{
            id: token_obj.id,
            username: token_obj.username,
        }
    });

    const character = await Character.findOne({
        where:{
            name: name,
            userId: user.id,
        }
    });

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

const characterList = async(username) => { //Список персонажей по юзеру
    const user = await User.findOne({
        where:{
            username:username,
        },
    });

    return await Character.findAll({
        where: {
            userId: user.id,
        },
        attributes: ['id', 'name', 'age', 'gender', 'about', 'img_url']
    });
}


module.exports = {
    addCharacter,
    editCharacter,
    characterList,
    // imageCharacter,
}

// const imageCharacter = async(id) => { //
//     const character = await Character.findOne({
//         where:{
//             id: id,
//         }
//     });
//     const img_url = character.img_url;
//     return(img_url);
// }