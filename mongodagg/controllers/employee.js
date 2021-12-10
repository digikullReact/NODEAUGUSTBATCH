const Attendance = require("../models/Attendance");
const Employee = require("../models/Employee");
const mongoose = require("mongoose");


exports.createEmployee=async(req,res)=>{


    try {
      const data=  await Employee.create(req.body);

      res.json({message:"Success",data:data})

        
    } catch (error) {
        console.log(error); // make a centrallized error controller
    }
}

exports.markAttendance=async(req,res)=>{
    // const employee ID

    try {

     const attendance=await Attendance.create({});
     console.log(attendance._id)
      const data=  await Employee.updateOne({_id:req.body._id},{$addToSet:{attendance:attendance._id}})

      res.json({message:"Success",data:data})

        
    } catch (error) {
        console.log(error); // make a centrallized error controller
    }
}

exports.getEmployees=async(req,res)=>{

    try {

 // Join mysql
         const data=  await Employee.find().populate([
             {
                path: 'attendance',
                model: 'attendance',
             }
         ])
         res.json({message:"Success",data:data})
   
           
       } catch (error) {
           console.log(error); // make a centrallized error controller
       }

}

// aggreagation ---->


exports.getEmployeeById=async(req,res)=>{
    console.log(typeof req.body._id);

    // findOne({_id:req.body._id})
    try {

 
        const aggDat=await Employee.aggregate([
            // multiple stages ---> 
            // there are operators that we use in this aggregation pipeline
        
            {
                // stage 

                $match : { _id : mongoose.Types.ObjectId(req.body._id )} 

            },
            

            {
                $lookup:
                  {
                    from: "attendances",
                    localField: "attendance", //Employee ---->attendance
                    foreignField: "_id",
                    as: "attendance"
                  }
             },
            

           





        ])

        
         res.json({message:"Success",data:aggDat})
   
           
       } catch (error) {
           console.log(error); // make a centrallized error controller
       }

}