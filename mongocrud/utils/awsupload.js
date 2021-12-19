const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

exports.awsUpload=(file,cb)=>{

    let myFile = file.originalname.split(".")
    const fileType = myFile[myFile.length - 1]

    const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `${uuidv4()}.${fileType}`,
        Body:file.buffer,
        ACL: 'public-read',
    }

    s3.upload(params,(err,data)=>{
        if(err) console.log(err);
        cb(data);
    })

    //s3.deleteObject

}