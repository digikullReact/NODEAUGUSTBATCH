const  jwt = require('jsonwebtoken');

exports.createJwt=(payload)=>{

    const  token = jwt.sign(payload, 'shhhhh',{expiresIn:"30s"});

    return token;

}