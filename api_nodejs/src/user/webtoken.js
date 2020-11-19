const jwt = require('jsonwebtoken');
const tokenkey = "3g5s-1g5g-64gj-3g73";

const tokenSign = (object) =>{
    return jwt.sign(object,tokenkey);
}
const tokenDecode = (token) =>{
    return jwt.decode(token,tokenkey);
}

module.exports={
    tokenSign,
    tokenDecode,
}