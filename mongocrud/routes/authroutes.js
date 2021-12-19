const { application } = require("express");
const express=require("express");
const { signUp, getAllData, logIn, uploadFile } = require("../controllers/authcontroller");
const router=express.Router();  //router object
const multer  = require('multer')

const storage = multer.memoryStorage({
    destination: function(req, file, callback) {
        callback(null, '')
    }
})
const upload = multer({storage}).single('file')

const { checKForPRoperData, middlewareLoggng, authorization } = require("../middlewares");
//route file levelmiddleware
//router.get("/allData",getAllData);

//router.use(checKForPRoperData);

//route level midleware
router.post("/signup",middlewareLoggng,signUp);
router.post("/login",logIn);
//router.use(authorization);
router.get("/allData",getAllData);

router.post("/uploadFile",upload,uploadFile)







module.exports=router;