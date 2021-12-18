const { application } = require("express");
const express=require("express");
const { signUp, getAllData, logIn } = require("../controllers/authcontroller");
const router=express.Router();  //router object

const { checKForPRoperData, middlewareLoggng, authorization } = require("../middlewares");
//route file levelmiddleware
//router.get("/allData",getAllData);

//router.use(checKForPRoperData);

//route level midleware
router.post("/signup",middlewareLoggng,signUp);
router.post("/login",logIn);
//router.use(authorization);
router.post("/allData",getAllData);








module.exports=router;