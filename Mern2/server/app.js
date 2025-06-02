
const express= require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const UserRoute=require("./routes/userRoute");
const port =8080

mongoose.connect("mongodb://127.0.0.1:27017/sainilogin").then(()=>{
    console.log("DATABASE ESTABLISHED")
})
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use("/users", UserRoute);


app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})