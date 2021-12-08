const app=require("./app");
const port=process.env.PORT || 9090;
const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://logan:logan123@cluster0.io38f.mongodb.net/mongocrundaugustbatch?retryWrites=true&w=majority").then(data=>{
    app.listen(port,()=>{
        console.log(`Server Running at Port ${port}`)
    })

}).catch(err=>{
console.log(err);
})

