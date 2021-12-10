const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    address:{
        
        city:{
            type:String
        },
        pincode:{
            type:String

        },
        country:{
            type:String

        },
       /*
        attendance:[
            {
                loginTime:{
                    type:Date

                },
                logoutTime:{
                    type:Date

                },


            }
        ]
        */

    },
   attendance:{ type: [mongoose.Schema.Types.ObjectId], ref: 'attendances', default: [] },


});

const employee = mongoose.model("employee", employeeSchema);
module.exports = employee;
