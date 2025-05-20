const express = require("express");
const EmpController = require("../Controllers/EmpControllers")

const route=express.Router();

route.get("/",EmpController.Home);
route.get("/insert",EmpController.Insert);
route.get("/display",EmpController.DisplayData);

route.post("/savedata",EmpController.SaveData);
route.get("/update",EmpController.updatePage);
route.get("/delete", EmpController.deleteData);
route.get("/editdata", EmpController.editData);
route.post("/editsave", EmpController.editDataSave);


module.exports=route;