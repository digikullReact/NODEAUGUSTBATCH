const { createUserDaoAsync, findAllUsers } = require("../dao/authdao")

exports.createUserService=async(req)=>{
    try {
        const data= createUserDaoAsync(req.body);
        return data;
    } catch (error) {
        throw new Error(error);
    }


}

exports.getAllUserService=()=>{

   return  findAllUsers()


}