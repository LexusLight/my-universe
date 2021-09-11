const {addCharacter,characterList,imageCharacter,editCharacter} = require('./query_character');
const path = require('path');

const apiCharacter = (app) => {
    //Рабочее
    app.post('/api/add_character', async (request, response)=>{ //Добавить персонажа
        const token = request.body.token;
        if(token === null){
            response.status(401).send("Ошибка авторизации");
            return;
        }
        const name = request.body.name;
        const avatar = request.files.avatar;
        const age = "21";
        const sex = request.body.sex;
        const full_name = request.body.full_name;
        const about = request.body.about;
        const likes = request.body.likes;
        const dislikes = request.body.dislikes;
        const image = request.files.image;
        const reference = request.files.reference;
        const quote = "fuck";

        const avatar_url = '/character/character_avatars/'+avatar.name;
        const image_url = '/character/character_images/'+image.name;
        const reference_url = '/character/character_references/'+reference.name;

        try{
            const character = await addCharacter(name, avatar, age, sex, full_name, about, likes, dislikes, image, reference, token, quote);
            await image.mv(`${__dirname}/../../media${image_url}`);
            await avatar.mv(`${__dirname}/../../media${avatar_url}`);
            await reference.mv(`${__dirname}/../../media${reference_url}`);
            response.send(character.name + " создан!");
        }catch (e){
            response.status(401).send(e);
        }
    });

    //Нерабочее
    app.post('/api/edit_character',async(request,response)=>{ //Редактировать персонажа
        const token = request.body.token;
        const name = request.body.name;
        const about = request.body.about;
        const image = request.body.image;
        const img_url = '/character_avatars/'+image.name;
        if(token === null){
            response.status(401).send("Ошибка авторизации");
        }
        try{
            const character = await editCharacter(name,img_url,about,token);
            await image.mv(`${__dirname}/../../media${img_url}`);
            response.send(character.name + ' отредактирован!')
        }catch (e){
            response.status(401).send(e);
        }

    })
    //Рабочее
    app.get('/api/character_list', async (request, response)=>{ //Список персонажей по юзеру
        const username = request.query.username;
        const characters = await characterList(username);
        response.json(characters);
    });

    // app.get('/api/character_avatar', async (request, response) =>{
    //     const id = request.query.id;
    //     const img_url = await imageCharacter(id);
    //     response.sendfile(path.resolve(`${__dirname}/../../media/character_avatars/${img_url}`));
    // })
}

module.exports = {
    apiCharacter,
}


// app.get('/redirect', (request, response) => {
//     response.redirect('/abcd');
// });
//
// app.get('/file', function (req, res) {
//     let file = `${__dirname}/../static/file.txt`;
//     res.download(file);
// });
//
//
// app.get('/user', function (req, res) {
//     res.send("Бла бла бла бла бла");
// });
//
// app.get('/json', function (req, res) {
//     res.json({
//         key: "value"
//     });
// });
