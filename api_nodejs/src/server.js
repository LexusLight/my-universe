// const path = require("path");
// const express = require('express');
import path from 'path'
import express from 'express'

const app = express();

app.use(express.static(path.join(__dirname, "public")));
// запуск статического файлового сервера,
// который смотрит на папку public/ (в нашем случае отдает index.html)

app.get('/api', function (req, res) {
    res.send("Бла бла бла бла бла");
});

app.get('/json', function (req, res) {
    res.json({
        key: "value"
    });
});

app.listen(1337, () => {
    console.log("Express server listening on port 1337")
});
