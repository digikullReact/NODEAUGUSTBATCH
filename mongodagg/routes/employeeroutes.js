const express=require("express");
const { createEmployee, markAttendance, getEmployees, getEmployeeById } = require("../controllers/employee");
const router=express.Router();  //router object

router.post("/create",createEmployee);
router.post("/markAttendance",markAttendance);
router.post("/getAll",getEmployees);
router.post("/getEmployeeById",getEmployeeById);





module.exports=router;