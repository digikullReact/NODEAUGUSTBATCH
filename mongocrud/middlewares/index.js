const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt=require("jsonwebtoken");


exports.middlewareLoggng=(req,res,next)=>{
    console.log(req.body);
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            console.log(hash);
            // Store hash in your password DB.
            req.body.password=hash;
            next();
        });
    });
   }

   exports.checKForPRoperData=(req,res,next)=>{

    if(req.body.username && req.body.password && req.body.name){
        next();

    }
}

    exports.authorization=async(req,res,next)=>{

        try {
            
            if(!req.headers.authorization) throw new Error("Missing auth token")

       await jwt.verify(req.headers.authorization, 'shhhhh');
       next();

        } catch (error) {
            next(error);
        }


       
}