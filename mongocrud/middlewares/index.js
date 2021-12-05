const bcrypt = require('bcrypt');
const saltRounds = 10;

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
res.json({message:"Fields Are Missing"});
}