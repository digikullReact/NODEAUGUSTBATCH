const express=require("express");
const cors=require("cors");
const authRoutes=require("./routes/authroutes");
const app=express();

app.use(cors());

app.use(express.json()); // json post body data
app.use(express.urlencoded({extended:true})); //www-urlencodedd data

// Ecommerce app --->showing products ,add to cart ,payment ,userporifle

app.use("/api/auth",authRoutes);







module.exports=app;  // Because we want to make our app testing friendly