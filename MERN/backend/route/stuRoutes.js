const express=require("express")
const route=express.Router()
const stuController=require("../Controllers/stuControllers")
route.get("/home",stuController.homePage)
route.post("/save",stuController.studentSave)
route.get("/display",stuController.dataDisplay)

module.exports= route