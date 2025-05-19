

const express=require("express");
const route= express.Router()


route.get("/home",(req, res)=>{
    res.send("<h1> This is home page Made in Node Using Express</h1>");
})

route.get("/about",(req, res)=>{
    res.send("<h1> This is about page Made in Node using Express</h1>");
})

route.get("/subject",(req, res)=>{
    res.send("<h1> This is Subject page Made in Node using Express</h1>");
})

route.get("/fees",(req, res)=>{
    res.send("<h1> This is fees page Made in Node using Express</h1>");
})

module.exports=route;

