const express=require("express");
const cors=require("cors");
const app=express();
const employeeRoutes=require("./routes/employeeroutes")


app.use(cors());
app.use(express.json());
app.use("/api/employee",employeeRoutes);

module.exports=app;