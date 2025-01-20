const express = require("express")
const mongoose=require("mongoose")

const cors=require("cors")

const app=express()

app.use(express.json())

app.use(cors())

let fruits=["Apple","Orange"]

//connecting mongo db

mongoose.connect("mongodb://127.0.0.1:27017/todo")
 .then(()=>{
    console.log("DB Connected Successfulled")
 })
.catch(()=>{
    console.log("DB is not connected")
})

//Creating model for fruit collection

const _fruits=mongoose.model("_fruits",{name:String},"fruits")



app.get("/fruits",(req,res)=>{
   
    _fruits.find()
    .then((fruit)=>{
        console.log(fruit)
        res.send(fruit)
    })
})

app.post("/addfruits",(req,res)=>{
    let newfruit=req.body.newfruit
    console.log(newfruit)
    const addFruit=new _fruits({
        name:newfruit

    })
   addFruit.save()
   .then(()=>{
    console.log("Saved successfully")
   })
   .catch(()=>{
    console.log("Not Saved")
   })
})



app.listen(5000,()=>{
    console.log("Server Started!!!")
})