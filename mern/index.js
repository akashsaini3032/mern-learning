

const http= require("http");


http.createServer((req, res)=>{
    res.write("<h1>   This is First App </h1>");
    res.end();
}).listen(8080);






