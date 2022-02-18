const {addArt,artList} = require('./query_art');
const path = require('path');

const apiArt = (app) => {
    //Рабочее
    app.post('/api/add_art', async (request, response) => { //Добавить арт
        const token = request.body.token;
        if (token === null) {
            response.status(401).send("Ошибка авторизации");
            return;
        }
        const name = request.body.name;
        const about = request.body.about;
        const image = request.files.image;

        const image_url = '/art/art_images/' + image.name;

        try {
            const art = await addArt(name, image_url, about, token);
            await image.mv(`${__dirname}/../../media${image_url}`);
            response.send(art.name + " создан!");
        } catch (e) {
            response.status(401).send(e);
        }
    });
    //Рабочее
    app.get('/api/art_list', async (request, response) => { //Список персонажей по юзеру
        const username = request.query.username;
        const arts = await artList(username);
        response.json(arts);
    });
}

module.exports = {
    apiArt,
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
