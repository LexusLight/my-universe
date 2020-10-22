const {registerUser,authUser,addLink,addCharacter} = require('./queries')

const addRequests = (app) => {
    app.post('/api/reg', async (request, response) => {
        try {
            const username = request.body.username;
            const email = request.body.email;
            const password = request.body.password;
            await registerUser(username,email,password);
            response.send("Пользователь " + username + " успешно создан!");

        }catch (e){
            response.send("Что-то пошло не так.... "+e.toString());
        }
    });

    app.post('/api/auth', async (request, response)=>{
        const username = request.body.username;
        const password = request.body.password;
        try{
            const jwt_obj = await authUser(username,password)
            response.status(200).json(jwt_obj);
        }catch (e){
            response.status(401).send(e);
        }
    });

    app.post('/api/add_character', async (request, response)=>{
        const token = request.body.token;
        const name = request.body.name;
        const about = request.body.about;
        if(token === null){
            response.status(401).send("Неавторизованный пользователь");
        }
        try{
            const character = await addCharacter(name,about,token);
            response.status(200).send(character.name + " создан!")
        }catch (e){
            response.status(401).send(e);
        }

    });

    // app.get('/addlink', async (request, response) => {
    //     try{
    //         let username = request.query.username;
    //         let url = request.query.url;
    //         let link_name = request.query.link_name;
    //         let link = await addLink(username,url,link_name);
    //         response.send("Привязана ссылка "+link.link_name);
    //     }catch (e){
    //         response.send("Ошибка!");
    //     }
    // });
    //
    // app.get('/proverka', (request, response) => {
    //     let obj = {aaaa:'aaaaa'};
    //     response.json(obj);
    //     console.log("WOW");
    // });
}

module.exports = {
    addRequests,
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
// app.get('/api', function (req, res) {
//     res.send("Бла бла бла бла бла");
// });
//
// app.get('/json', function (req, res) {
//     res.json({
//         key: "value"
//     });
// });
