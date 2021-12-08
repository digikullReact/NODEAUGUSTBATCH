const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
   
  },
  password: {
    type: String,
    required: true,
  
  },
  name: String,
  age:Number
});

const User = mongoose.model("user", userSchema);
module.exports = User;
