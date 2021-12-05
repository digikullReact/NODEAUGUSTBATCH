const express=require("express");
const { signUp } = require("../controllers/authcontroller");
const User = require("../models/User");
const router=express.Router();  //router object

router.post("/signup",async(req,res)=>{
    const data=await User.find();
    res.json(data);

});


module.exports=router;