const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
   name:{
       type:String
   },
   age:{
       type:Number
   }
 

})

const user=mongoose.model("user",userSchema);  // MODELL ====COLLECTION

module.exports=user;