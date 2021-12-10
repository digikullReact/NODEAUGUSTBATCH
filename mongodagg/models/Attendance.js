const mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema({

 timeIn:{
     type:Date,
     default:new Date()
 },
 timeOut:{
    type:Date,
    default:new Date()

},


});

const attendance = mongoose.model("attendance", attendanceSchema);
module.exports = attendance;
