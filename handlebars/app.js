const express = require("express");
const app = express();
const {engine}=require("express-handlebars");

//Mongodb ddatabase
const data=[
    {
        name:"John",
        vaccinated:false

    },
    {
        name:"Lita",
        vaccinated:true

    },
    {
        name:"Preeti",
        vaccinated:true

    }
]
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.set('views', './views');  // by default every template engine looks for views directryory





app.get("/home",(req,res)=>{

    User.find().then(data=>{
        res.render('home',{people:data})

    })
})

app.get("/api/home",(req,res)=>{
    res.json(data)
 })

app.get("/about",(req,res)=>{
    res.render('about') // html 
 })


 app.post("/submit",(req,res)=>{
     console.log(req.body);
    res.send('about') // html 
 })

const someMEthod =(req,res)=>{
    console.log(req.query);
    res.json({data:"HII"})  // json response 
 }


app.get("/hello",someMEthod)



app.listen(9800, () => {
  console.log("Server Running At Port " + process.env.PORT);
});
