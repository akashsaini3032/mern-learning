const express = require("express")
const route=express.Router()
const empController=require("../Controllers/empController")

route.get("/",empController.homePage)
route.get("/insert",empController.insert)
route.get("/display",empController.displayPage)
route.post("/save",empController.dataSave)
route.get("/update",empController.updatePage)
route.get("/dlt",empController.dlt)
route.get("/edit",empController.editData)
route.post("/editSave",empController.editDataSave)
route.post("/datasearch",empController.searchData)
route.get("/search", empController.searchPage);

module.exports=route