require("dotenv").config();  // looking for .env file in your root folder  --->
const mongoose=require("mongoose");

const app=require("./app");


mongoose.connect(process.env.MONGO_URL).then(data=>{
    return  new Promise((res,rej)=>{
        res("Connected To Db")
    })


}).then(data=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server Running "+data);
    })
}).
catch(err=>{
    console.log(err);
})


