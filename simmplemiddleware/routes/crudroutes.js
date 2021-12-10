const express=require("express");
const { getData, insertOne,insertMany, recordByUsername, updateById, updateAll,deleteOne, deleteAll } = require("../controllers/crudecontroller");
const { validate } = require("../middlewares");


const router=express.Router();

router.get("/getAllData",validate,getData);

router.post("/insertOne",insertOne);

router.post("/insertMany",insertMany);

router.get("/getRecordByUsername/:username",recordByUsername);

router.patch("/updateById",updateById);
router.put("/updateAll",updateAll);


router.delete("/deleteById",deleteOne);
router.delete("/deleteAll",deleteAll);

// middlewares --->




module.exports=router;