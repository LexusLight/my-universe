const path = require('path');
const express = require('express');
const {addRequests} = require('./requests');

const app = express();

app.use(express.static(path.join(__dirname, "../media")));
// Запуск статического файлового сервера,

app.use(express.json());

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    next();
});
// Решаем Cors

addRequests(app);

app.listen(1337, () => {
    console.log("Слушаю порт 1337....")
});

