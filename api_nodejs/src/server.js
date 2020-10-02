// const path = require("path");
// const express = require('express');
const path = require('path')
const express = require('express')
const {registerUser,addLink} = require('./queries')

const app = express();

app.use(express.static(path.join(__dirname, "../static")));
// запуск статического файлового сервера,

app.get('/register', async (request, response) => {
    let username = request.query.username;
    let email = request.query.email;
    try {
        let user = await registerUser(username,email);
        response.send("Пользователь с id " + user.id + " успешно создан!");
    }catch (e){
        response.send("Что-то пошло не так....")
    }
});

app.get('/addlink', async (request, response) => {
    try{
        let username = request.query.username;
        let url = request.query.url;
        let link_name = request.query.link_name;
        let link = await addLink(username,url,link_name);
        response.send("Привязана ссылка "+link.link_name);
    }catch (e){
        response.send("Ошибка!");
    }
});

app.listen(1337, () => {
    console.log("Слушаю порт 1337....")
});

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
// app.get('/api', function (req, res) {
//     res.send("Бла бла бла бла бла");
// });
//
// app.get('/json', function (req, res) {
//     res.json({
//         key: "value"
//     });
// });
