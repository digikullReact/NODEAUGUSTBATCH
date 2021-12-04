const mongoose = require('mongoose');
const express =require('express');
const app=express();
const User=require("./models/User");

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.post("/api/save",(req,res)=>{
    User.create({
        name:req.body.name,
        age:req.body.age
    }).then(data=>{
        res.json({message:"User Saved",data:data})

    })
})


app.get("/api/user",(req,res)=>{
    User.find().then(data=>{
        res.json({message:"User Data",data:data})

    })
})

// req.params

app.get("/api/user/:name",(req,res)=>{
    const name=req.params.name
    User.find({name:name}).then(data=>{


        res.json({message:"User Data",data:data})

    })
})




//req.query
app.get("/api/userData",(req,res)=>{
    const name=req.query.name
    User.find({name:name}).then(data=>{


        res.json({message:"User Query Data",data:data})

    })
})


app.get("*",(req,res)=>{
    console.log(req);

    //req.params // /user/999  -->params /// 
    //req.query  /// user?name=john&adrress=Delhi // req.query.name // req.query.address
    //req.body-->post or put request  req.body.name

    //req.headers
    // -->req.xx-forwared--->
    // res.render
    //res.json
    //res.send
    //res.status(200);
    
    //res.render(404 template here as well);
    res.json({message:"This route is not found"})
})

mongoose.connect('mongodb+srv://logan:logan123@cluster0.io38f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(data=>{
    console.log("Connected with Db")

app.listen(9001,()=>{
    console.log("Server Running");
})
}).catch(err=>{
    console.log(err);
})



// MONGODB SERVER QUERIES ON CLI