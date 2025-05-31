

const express=require("express");

const route=express.Router();

const dorController=require("../Controllers/drController")

route.get("/home",dorController.homePage)
route.get("/specialization", dorController.specializationPage)
route.get("/expertise",dorController.patientPage)
route.get("/contact",dorController.contactPage)




module.exports=route