


const express=require("express");
const app=express();
const DrRoute = require("./route/drRoute")




app.use("/drRoute",DrRoute)





app.listen(8000,()=>{
    console.log("server is on port 8000")
})