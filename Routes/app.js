

  const express= require("express");


const app= express();

const stuRoutes=require("./Routes/stuRoute")

const tecRoutes=require("./Routes/tecRoute")

app.use("/students",stuRoutes)

app.use("/teacher", tecRoutes)








app.listen(8000,  ()=>{
    console.log("Server Run on 8000 port ");
})