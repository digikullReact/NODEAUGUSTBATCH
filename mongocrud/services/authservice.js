const {
  createUserDaoAsync,
  findAllUsers,
  findUserDao,
} = require("../dao/authdao");
const User = require("../models/User");
const { createJwt } = require("../utils/auth");



exports.createUserService = async (req) => {
  try {
    const data = createUserDaoAsync(req.body);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.loginService = async (body) => {
  try {
    const data = await findUserDao({ username: body.username });
 

    // run some checks that passord matches or not
    if (!data) throw new Error("Username Not found");
    // we have to check for the password ---->
    //console.log((data.correctPassword(body.password,data.password)))
    if(!(await data.correctPassword(body.password,data.password))) throw new Error("Incorrect Password");
    // -->password is correct --->

    const token=createJwt(JSON.parse(JSON.stringify(data)))
    

    return {token:token};
  } catch (error) {
    throw new Error(error);
  }
};
exports.nameService = async (body) => {
  try {
    const data = findUserDao({ name: body.name });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllUserService = () => {
  return findAllUsers();
};
