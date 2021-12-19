const { createUserService, getAllUserService, loginService } = require("../services/authservice");
const {awsUpload}=require("../utils/awsupload")

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


exports.uploadFile=async(req,res)=>{


    try {


      // console.log(awsUpload);
        awsUpload(req.file,function(data){
            res.json({message:"Success",filePath:data.Location});
        })
     
        
    } catch (error) {
        console.log(error);
        
    }

}

exports.getAllData=(req,res)=>{

 


    getAllUserService().then(data=>{
        res.json({response:data});

    }).catch(err=>{

        next(err);

    })
    

}

