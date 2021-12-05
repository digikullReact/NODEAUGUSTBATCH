const express=require("express");
const cors=require("cors");
const authRoutes=require("./routes/authroutes");
const userRoutes=require("./routes/userorutes");
const { checKForPRoperData } = require("./middlewares");
const app=express(); //app object

app.use(cors());

app.use(express.json()); // json post body data
app.use(express.urlencoded({extended:true})); //www-urlencodedd data
//app.use(checKForPRoperData);//global middleware //for all routes present

// Ecommerce app --->showing products ,add to cart ,payment ,userporifle

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);





module.exports=app;  // Because we want to make our app testing friendly