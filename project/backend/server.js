const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/taskdata");

const todo=mongoose.model("data",new mongoose.Schema({
  text:String
}))

app.get('/todos',async(req,res)=>{
  res.json(await todo.find());
})

app.post('/todos',async(req,res)=>{
  const t=await todo.create({text:req.body.text});
  res.json(t);
})

app.delete('/todos/:id',async(req,res)=>{
  await todo.findByIdAndDelete(req.params.id);
  res.json({ok:true});
})

const port=3434;
app.listen(port,(req,res)=>{
  console.log(`http://localhost:${port}`);
})