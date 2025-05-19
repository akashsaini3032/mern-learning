


const express= require("express");
const app=express();

const EmpRoute=require("./routes/empRoute");
const mongoose=require("mongoose");
const bodyParser= require('body-parser')

mongoose.connect("mongodb://localhost:27017/akashsaini").then(()=>{
    console.log("DB Successfully Connected")
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.set('view engine',"ejs");

app.use("/", EmpRoute);




app.listen(8000,()=>{
    console.log("sever run 8000 port");
})