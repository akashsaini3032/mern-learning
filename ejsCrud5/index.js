const express= require("express")
const app=express()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const empRoute=require("./Routes/empRoute")
mongoose.connect("mongodb://127.0.0.1:27017/tnpDB").then(()=>{
    console.log("MongoDB connection established!!!")
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use("/",empRoute)

app.listen(8000,()=>{
    console.log("Server is running on port 8000!!!")
})