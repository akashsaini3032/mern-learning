

const express=require("express");
const app=express();


const mongoose=require("mongoose");
const StuRoute= require("./routes/stuRoute");
const bodyParser=require('body-parser');


mongoose.connect("mongodb://localhost:27017/akashdatabase").then(()=>{
    console.log("mongodb succesful connect")
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set("view engine", "ejs");

app.use("/students", StuRoute);






app.listen(8000,()=>{
    console.log("server is on port 8000")
})