const express = require("express");
const app = express();

//Mongodb ddatabase
const data=[
    {
        name:"John",
        vaccinated:false

    },
    {
        name:"Lita",
        vaccinated:true

    }
]

app.set('view engine', 'ejs');

app.set('views', './views');

// home:9090/api/homeData

// template engine configuring 
app.get("/",(req,res)=>{
    /// mongodb query
    //res.json(data); /// react utilize kr 
    //res.render('home',{data:data}) /// you created html diretly from server 
    res.redirect("/home");
    
})

app.get("/home",(req,res)=>{
    /// mongodb query
    //res.json(data); /// react utilize kr 
    //res.render('home',{data:data}) /// you created html diretly from server 
    res.send("home route")
})







app.listen(9800, () => {
  console.log("Server Running At Port " + process.env.PORT);
});
