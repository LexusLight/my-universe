const {addCharacter,characterList,imageCharacter} = require('./query_character');
const path = require('path');

const apiCharacter = (app) => {

    app.post('/api/add_character', async (request, response)=>{
        const token = request.body.token;
        const name = request.body.name;
        const about = request.body.about;
        const image = request.files.image;
        const img_url = image.name;
        if(token === null){
            response.status(401).send("Ошибка авторизации");
        }
        try{
            const character = await addCharacter(name,img_url,about,token);
            await image.mv(`${__dirname}/../../media/character_avatars/${img_url}`);
            response.send(character.name + " создан!");
        }catch (e){
            response.status(401).send(e);
        }
    });

    app.get('/api/character_list', async (request, response)=>{
        const username = request.query.username;
        const characters = await characterList(username);
        response.json(characters);
    });

    app.get('/api/character_avatar', async (request, response) =>{
        const id = request.query.id;
        const img_url = await imageCharacter(id);
        response.sendfile(path.resolve(`${__dirname}/../../media/character_avatars/${img_url}`));
    })


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
