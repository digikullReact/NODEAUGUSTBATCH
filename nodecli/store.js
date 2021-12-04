const fs=require("fs");
const os=require("os");

const medicineName=process.argv[2];

const price=process.argv[3];

const quantity=process.argv[4];

const name=process.argv[5];




function sales(medicineName,price,quantity,name){

    /// save the user somewhere --->
    const data=`${medicineName} ,${price} ,${quantity},${name} ${os.EOL}`

    fs.appendFile("store.txt",data,(err,data)=>{
        console.log("Saved To file")

    })

}

sales(medicineName,price,quantity,name);