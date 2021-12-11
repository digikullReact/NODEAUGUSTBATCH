require("dotenv").config();  // looking for .env file in your root folder  --->
const mongoose=require("mongoose");

const app=require("./app");
let  server;

mongoose.connect(process.env.MONGO_URL).then(data=>{
    return  new Promise((res,rej)=>{
        res("Connected To Db")
    })


}).then(data=>{
    server= app.listen(process.env.PORT,()=>{
        console.log("Server Running "+data);
    })
}).
catch(err=>{
    mongoose.disconnect();
    console.log(err);
})

process.on('SIGTERM', () => {
    mongoose.disconnect();

  
  })
