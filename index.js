// var a=20;
// var b=30;
// var c=40;
// console.warn(a+b+c);

// const arr=[2,4,7,1,3,8,3];

// let result =arr.filter((item)=>{
// return item>=4;
// })
// console.warn(result);

// const http = require('http');

// http.createServer((req,resp)=>{
//    resp.write("Hello this is adnan");
//    resp.end();
// // }).listen(4500);  
// console.warn("Adnan Shaikh");
// console.log(100+20);

// const http = require('http');
// const data= require('./data') 

//  http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-Type':'application\json'});
// resp.write(JSON.stringify(data));
// resp.end();
//  }).listen(5000);

// const { warn, log } = require('console');
// const fs = require('fs');
// const path =require('path');
// const dirPath=path.join(__dirname,'files');
// // console.warn(dirPath)

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log("file name is",item);
//     })
// })

// const express = require('express');
// const reqFilter = require('./middleware');
// const app= express();
// const route =  express.Router();

// app.set('view engine','ejs');\
// middleware 

// const reqFilter=(req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("please provide your age")
//     }

//     else if(req.query.age<18){
//         resp.send("you are under aged")

//     }
//     else{
//         next();
//     }

// }

// route.use(reqFilter);
// app.get('',(req,res)=>{
//     res.send('Welcome,this is home page');
// });

// route.get('/users',(req,res)=>{
//     res.send('Welcome,this is users page');
// });

// route.get('/about',(req,res)=>{
//     res.send('Welcome,this is about page');
// });

// app.get('/help',(req,res)=>{
//     res.send('Welcome,this is help page');
// });

// app.use('/',route)

// app.get('/profile',(req,res)=>{

//     const user={
//         name:'Adnan Shaikh',
//         email:'adnan shaikh@gmail.com',
//         country:'INDIA',
//         skills:['php','js','c++','java','node']
//     }
//     res.render('profile',{user});
// });

// app.listen(4300);   


// getData();

// db.connect().then((resp) => {
//     resp.find().toArray().then((data)=>{
//         console.warn(data);
//     });

// })
const dbConnect=require('./mongodb')
const main = async () => {
    let data = await dbConnect();
    data =await data.find().toArray();
    console.warn(data);
}

main();