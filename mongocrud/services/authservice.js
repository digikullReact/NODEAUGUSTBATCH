const { createUserDaoAsync } = require("../dao/authdao")

exports.createUserService=async(req)=>{
    try {
        const data= createUserDaoAsync(req.body);
        return data;
    } catch (error) {
        throw new Error(error);
    }


}