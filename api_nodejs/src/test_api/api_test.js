const {testList} = require("./query_test");

const apiTest = (app) => {

    app.get('/api/testList', async (request, response)=>{ //Список персонажей по юзеру
        const characters = await testList();
        response.json(characters);
    });

}

module.exports = {
    apiTest,
}
