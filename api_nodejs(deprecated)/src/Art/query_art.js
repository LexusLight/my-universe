const {User,UserArt} = require('../models');
const {tokenDecode} = require('../user/webtoken');

//Рабочее
const addArt = async (name, image_url, about,token) => { //Добавить персонажа
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
        let art = await UserArt.create({
        name: name,
        img_url: image_url,
        about: about,
        userId: user.id,
    });
    return(art);
    }
};

const artList = async(username) => {
    const user = await User.findOne({
        where:{
            username: username,
        },
    });
    let arr = await UserArt.findAll({
        where:{
            userId: user.id,
        },
        attributes: ['img_url'],
        limit:5
    });
    return arr;
}

//Нерабочее



module.exports = {
    addArt,
    artList,
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