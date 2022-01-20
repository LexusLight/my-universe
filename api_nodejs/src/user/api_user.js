const {getAvatar} = require("./query_user");
const {registerUser,authUser,editAbout,editAvatar,editUsername,addLink} = require('./query_user')
const {forgotPassword} = require('../email/email_sender')

const apiUser = (app) => {
    //Зарегистрировать пользователя
    app.post('/api/reg', async (request, response) => {
        try {
            const username = request.body.username;
            const email = request.body.email;
            const password = request.body.password;
            const image = request.files.image; //последнее свойство как название файла
            const img_url = image.name;
            const auth_obj = await registerUser(username,email,password,img_url);
            await image.mv(`${__dirname}/../../media/user/user_avatars/${img_url}`);
            response.status(200).json(auth_obj);
        }catch (e){
            response.send("Что-то пошло не так.... "+e.toString());
        }
    });

    //Авторизовать пользователя
    app.post('/api/auth', async (request, response)=>{
        const username = request.body.username;
        const password = request.body.password;
        try{
            const auth_obj = await authUser(username,password);
            response.status(200).json(auth_obj);
        }catch (e){
            response.status(401).send(e);
        }
    });

    //Получить линк на аватарку
    app.get('/api/avatar', async (request, response)=>{
        const username = request.query.username;
        try{
            const img_url_object = await getAvatar(username);
            response.status(200).json(img_url_object);
        }catch (e){
            response.status(401).send(e);
        }
    });

    //Список ссылок по юзеру
    app.get('/api/link_list', async (request, response)=>{
        //const username = request.query.username;
        //const characters = await linkList(username);
        //response.json(characters);
    });

    //Список артов по юзеру
    app.get('/api/art_list', async (request, response)=>{
        //const username = request.query.username;
        //const characters = await linkList(username);
        response.json([]);
    });

    //Список артов по юзеру
    app.post('/api/add_arts', async (request, response)=>{
        //const username = request.query.username;
        //const characters = await linkList(username);
        //response.json(characters);
    });

    //Информация о юзере
    app.get('/api/about', async (request, response)=>{
        //const username = request.query.username;
        //const characters = await linkList(username);
        //response.json(characters);
    });

    //Редактировать юзернейм
    app.post('/api/edit_username', async (request, response)=>{
        const token = request.body.token;
        const username = request.body.username;
        try{
            await editUsername(username,token);
            response.status(200).send('Профиль отредактирован!');
        }catch (e){
            response.status(401).send(e);
        }
    });

    //Редактировать аватар ДОДЕЛАТЬ
    app.post('/api/edit_avatar', async (request, response)=>{
        const token = request.body.token;
        const image = request.files.image; //последнее свойство как название файла
        const img_url = image.name;
        try{
            await editAvatar(token,img_url);
            await image.mv(`${__dirname}/../../media/user/user_avatars/${img_url}`);
            response.status(200).send('Аватар отредактирован!');
        }catch (e){
            response.status(401).send(e);
        }
    });

    //Редактировать информацию
    app.post('/api/edit_about', async (request, response)=>{
        const token = request.body.token;
        const about = request.body.about;
        try{
            await editAbout(about,token);
            response.status(200).send('Профиль отредактирован!');
        }catch (e){
            response.status(401).send(e);
        }
    });

    //Если забыли пароль. Не работает!
    app.post('/api/forgot_password', async (request, response)=>{
        const email = request.body.email;
        try{
            await forgotPassword(email);
            response.status(200).send('Проверьте свою почту!');
        }catch (e){
            response.status(401).send(e);
        }
    });

    //Добавить ссылку
    app.post('/api/add_link', async (request, response) => {
        let username = request.body.username;
        let url = request.body.url;
        let link_name = request.body.link_name;
        let token = request.body.token;
        if(token === null){
            request.status(401).send("Ошибка авторизации");
        }
        try {
            let link = await addLink(username,url,link_name,token);
            response.send("Привязана ссылка "+link.link_name);
        }catch (e){
            response.status(401).send(e);
        }
    });
}

module.exports = {
    apiUser,
}





// app.post('/api/file', async (request,response) => {
//     const file = request.files.file;
//     await file.mv(`${__dirname}/../media/${file.name}`, error => {
//         if (error) {
//             console.error(error);
//             return response.status(500).send(error);
//         }
//         response.json({filename: file.name, filePath: `media/${file.name}`});
//     });
// });
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
