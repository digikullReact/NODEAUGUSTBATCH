const { application } = require("express");
const express=require("express");
const { signUp, getAllData } = require("../controllers/authcontroller");
const router=express.Router();  //router object

const { checKForPRoperData, middlewareLoggng } = require("../middlewares");
//route file levelmiddleware
//router.use(checKForPRoperData);

//route level midleware
router.post("/signup",middlewareLoggng,signUp);
router.post("/allData",getAllData);








module.exports=router;