


const express= require("express");
const route=express.Router();
const EmpController=require("../controlers/empController");

route.get("/", EmpController.homePage);
route.get("/insert", EmpController.insertPage);
route.get("/save", EmpController.dataSave);

route.get("/display", EmpController.displayPage);

module.exports= route;
