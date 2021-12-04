const http=require('http');
const queryString = require('query-string');
const fs =require("fs"); // built in module of node js


const server=http.createServer((req,res)=>{
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
      };
    
    const {method,url}=req;
    if(method==="POST" && url=="/api/save"){
        // We gonna be parsing the data 
        let body=[];

        req.on("data",(chunk)=>{
            body.push(chunk);

        })

        req.on("end",()=>{
            body=Buffer.concat(body).toString();
            const parsed = queryString.parse(body);
           console.log(parsed);
           res.writeHead(200,headers);// wroting the status code
           res.write(JSON.stringify(parsed)); // writing the actual data
           res.end(); // We are finishing the response 

        })

      
    }

    /// We gonna be sending the html Data
    else if(method==="GET" && url=="/html"){

        // We have to read the file 
        fs.readFile("./index.html",(err,data)=>{
            if(err) {
                res.writeHead(404);
                res.end("File Not Found");
            }
            else{
                res.writeHead(200);
                res.write(data);
                res.end();
            }

           
        })
    }

});





server.listen(7001,()=>{
    console.log("Server Running At Port 7001")
})