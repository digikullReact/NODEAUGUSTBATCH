const User=require("../models/User");
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getData=async(req,res)=>{

  // wrapped together
//  tshirts // pants // jackets 

   try {


        console.log(`Requets has arrived with followig params ${req.body.username}`)

        // password encoidng

       // const encodepassword=bcrypt.hash(req.body.password, saltRounds);

       /// req.body.password=encodepassword;


        const data= await User.find();
        res.json({message:"All Records",data:data});

       
  
   

        
    } catch (error) {
        console.log(error);
        
    }

}

exports.insertOne=async(req,res)=>{
    console.log(req.body);
    try {

       const data= await User.create(req.body);

       res.json({message:"Data Added",data:data});
        
    } catch (error) {
        console.log(error);
        
    }

}

exports.insertMany=async(req,res)=>{

    console.log(req.body);
    try {

       const data= await User.insertMany(req.body);

       res.json({message:"Data Added",data:data});
        
    } catch (error) {
        console.log(error);
        
    }

}

exports.recordByUsername=async(req,res)=>{

    try {

        const data= await User.findOne({username:req.params.username});
 
        res.json({message:"Data Added",data:data});
         
     } catch (error) {
         console.log(error);
         
     }

}

exports.updateById=async(req,res)=>{

    // update
    //updateOne

    try {

        console.log(req.body);
        const data= await User.updateOne({_id:req.body._id},{$set:{name:req.body.name}})
 
        res.json({message:"Data Updated",data:data});
         
     } catch (error) {
         console.log(error);
         
     }


}

exports.updateAll=async(req,res)=>{

    // update
    //updateOne

    try {

        console.log(req.body);
        const data= await User.updateMany({username:req.body.username},{$set:{password:req.body.password}})
 
        res.json({message:"Data Updated",data:data});
         
     } catch (error) {
         console.log(error);
         
     }


}

exports.deleteOne=async(req,res)=>{
    console.log(req.body);


    try {

        const data= await User.deleteOne({_id:req.body._id})
 
        res.json({message:"Data Delete",data:data});
         
     } catch (error) {
         console.log(error);
         
     }
    
}

exports.deleteAll=async(req,res)=>{


    try {

        const data= await User.deleteMany({name:req.body.name})
 
        res.json({message:"Data Delete",data:data});
         
     } catch (error) {
         console.log(error);
         
     }
    
}