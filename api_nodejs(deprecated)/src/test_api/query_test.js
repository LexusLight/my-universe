const {Test} = require('../models');
const {tokenDecode} = require('../user/webtoken');

const testList = async() => { //Список персонажей по юзеру

    return await Test.findAll({});
}


module.exports = {
    testList,
    // imageCharacter,
}
