exports.centralErrorHandler=(err,req,res,next)=>{

    res.json({message:"Error Occurred",data:err.message});

}