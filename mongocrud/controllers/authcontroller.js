const { createUserService, getAllUserService, loginService } = require("../services/authservice");

exports.signUp=async(req,res)=>{
    console.log(req.body);

    try {
        //    const data=User.find();

        const data=await createUserService(req);
        res.json({message:"Success",data:[data]});
        
    } catch (error) {
        console.log(error);
        // middleware to handle error -->
    }

}

exports.logIn=async(req,res,next)=>{

    try {
        //    const data=User.find();

        const data=await loginService(req.body);
        res.json({message:"Success",data:[data]});
        
    } catch (error) {
     
  

     
        next(error);

    }

}


exports.getAllData=(req,res)=>{

 


    getAllUserService().then(data=>{
        res.json({response:data});

    }).catch(err=>{

        next(err);

    })
    

}

