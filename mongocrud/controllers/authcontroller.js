const { createUserService } = require("../services/authservice");

exports.signUp=async(req,res)=>{

    try {
        const data=await createUserService(req);
        res.json({message:"Success",data:data});
        
    } catch (error) {
        console.log(error);
        // middleware to handle error -->
    }

}
