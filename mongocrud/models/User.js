const mongoose = require("mongoose");
const bcrypt=require("bcrypt");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
});


//   ---->hooks in monoose --pre hooks



//  ---->


// This is Instance Method that is gonna be available on all documents in a certain collection
userSchema.methods.correctPassword = async function (
  typedPassword,
  originalPassword
) {

  return await bcrypt.compare(typedPassword, originalPassword);
  //return (typedPassword == originalPassword);
};

const User = mongoose.model("user", userSchema);
module.exports = User;
