const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const {apiUser} = require('./api/api_user');
const {apiCharacter} = require('./api/api_character');

const app = express();

app.use(express.static(path.join(__dirname, "../media"))); // Запуск статического файлового сервера,

app.use(express.json()); //Для работы с JSONами

app.use(fileUpload());

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    next();
});
// Решаем Cors

apiUser(app);
apiCharacter(app);

app.listen(1337, () => {
    console.log("Слушаю порт 1337....")
});

