

const express= require("express");


const app= express();





app.get("/home",(req, res)=>{
    res.send("<h1> This is home page Made in Node Using Express</h1>")
})

app.get("/about",(req, res)=>{
    res.send("<h1> This is about page Made in Node using Express</h1>")
})

app.get("/service",(req, res)=>{
    res.send("<h1> This is service page Made in Node using Express</h1>")
})

app.get("/contact",(req, res)=>{
    res.send("<h1> This is contact page Made in Node using Express</h1>")
})

app.get("/",(req, res)=>{
    res.send("<h1> Welcome in Node js Class of Mern FullStack</h1>")
})






app.listen(8000,  ()=>{
    console.log("Server Run on 8000 port ");
})



