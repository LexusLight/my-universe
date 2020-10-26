const {addCharacter,characterList} = require('./query_character');

const apiCharacter = (app) => {

    app.post('/api/add_character', async (request, response)=>{
        const token = request.body.token;
        const name = request.body.name;
        const about = request.body.about;
        if(token === null){
            response.status(401).send("Ошибка авторизации");
        }
        try{
            const character = await addCharacter(name,about,token);
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
