const { createUserService, getAllUserService } = require("../services/authservice");

exports.signUp=async(req,res)=>{
    console.log(req.body);

    try {
        //    const data=User.find();

        const data=await createUserService(req);
        res.json({message:"Success",data:data});
        
    } catch (error) {
        console.log(error);
        // middleware to handle error -->
    }

}

exports.getAllData=(req,res)=>{

    getAllUserService().then(data=>{
        res.json(data);

    }).catch(err=>{

    })
    

}

