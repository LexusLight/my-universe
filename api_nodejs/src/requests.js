const {registerUser,authUser,addLink} = require('./queries')

const addRequests = (app) => {
    app.post('/register', async (request, response) => {
        try {
            let username = request.body.username;
            let email = request.body.email;
            let password = request.body.password;
            let user = await registerUser(username,email,password);
            response.send("Пользователь " + username + " успешно создан!");

        }catch (e){
            response.send("Что-то пошло не так.... "+e.toString());
        }
    });

    app.post('/auth', async (request, response)=>{
        let username = request.body.username;
        let password = request.body.password;
        response.json(await authUser(username,password));
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
