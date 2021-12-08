const express=require("express");
const { getData } = require("./controllers/crudecontroller");
const crudRoutes=require("./routes/crudroutes");
const app=express();
// We cant separte our apis
app.use(express.json());
// use --> actually an object provided by express object for configuring routes and middleware at global/app level
app.use("/api",crudRoutes)






module.exports=app;
