
// day 1

// const http= require("http");


// http.createServer((req, res)=>{
//     res.write("<h1> first app </h1> ");
//     res.end();
// }).listen(8080);


// day2

// const http= require("http");//require is a method of server side js//module/package=>http is a module.
// // User-defined modules :
// const myMod=require("./cybrom")
// http.createServer((req,res)=>{
//     res.write("<h1>Node JS</h1>");
//     res.write(myMod.myName());
//     res.write(myMod.myMsg());
//     res.write(myMod.myScl());
//     res.write(myMod.sum())
//     res.end("<h1>server ends</h1>");
// }).listen(8080,()=>{
// console.log("server is running on port 8080")
// });//listen 
// //request ka waiting tym eliminate ho jata h by async node


// const http=require("http");

// const uc=require("uppercase");

// http.createServer((req,res)=>{
//     res.write(uc("Welcome"));
//     res.end();

// }).listen(8000, ()=>{
//     console.log("server")
// })




const http=require("http");

const fs=require("fs");

http.createServer((req,res)=>{

    fs.readFile("raj.txt", (err, data)=>{

        res.write(data)
         res.end();

    })
   

}).listen(8000, ()=>{
    console.log("server")
})






