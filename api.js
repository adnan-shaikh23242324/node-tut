const express = require('express');
const dbConnect =require('./mongodb');
const mongodb = require('mongodb');
 const app = express();
 app.use(express.json());
 
 app.get('',async(req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);


 });

 app.post('',async(req,res)=>{
    let data = await dbConnect();
    result = await data.insertOne(req.body);
    res.send(result);
 })

 app.put("/",async(req,res)=>{
   let data = await dbConnect();
   let result =data.updateOne(
      {name:"req.body.name"},
      {$set:req.body}
      )
      res.send({result:"update"})
   // console.log(req.body);
   // res.send({result:"update"});
})

app.delete("/:id",async(req,res)=>{
      console.log(req.params.id);
      const data = await dbConnect();
      const result =data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})

      res.send(result);
   })

 app.listen(4500);