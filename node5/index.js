

const express=require("express");
const app=express();

const StuRoute= require("./routes/stuRoute");

app.set("view engine", "ejs");

app.use("/students", StuRoute);






app.listen(8000,()=>{
    console.log("server is on port 8000")
})