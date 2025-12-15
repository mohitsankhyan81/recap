const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/taskdata");

const data=mongoose.model("task",new mongoose.Schema({
  text:String 
}))

app.get('/todos',async(req,res)=>{
  res.json(await data.find());
})

app.post('/todos',async(req,res)=>{
  const t=await data.create({text:req.body.text});
  res.json(t);
})

app.delete('/todos/:id',async(req,res)=>{
  await data.findByIdAndDelete(req.params.id)
  res.json({ok:true})
})

app.put('/todos/:id', async (req, res) => {
  const updated = await data.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { new: true }
  );
  res.json(updated);
});


const port=2522;

app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})
