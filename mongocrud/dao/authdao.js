const User = require("../models/User");

exports.createUserDaoAsync = async (body) => {

  try {
    return await User.create(body);
  } catch (error) {
     throw new Error(error);
  }
};


exports.findUserDao = async (body) => {

  try {
    return await User.findOne(body)
  } catch (error) {
     throw new Error(error);
  }
};
//db.collec
exports.findAllUsers=()=>{

  return User.find()

}
