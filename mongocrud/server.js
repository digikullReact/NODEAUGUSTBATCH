require("dotenv").config();  // looking for .env file in your root folder  --->
const mongoose=require("mongoose");

const app=require("./app");


mongoose.connect(process.env.MONGO_URL).then(data=>{
    console.log("Connected To Db"); //Replacing with logger 

    app.listen(process.env.PORT,()=>{
        console.log("Server Running");
    })
}).catch(err=>{
    console.log(err);
})


