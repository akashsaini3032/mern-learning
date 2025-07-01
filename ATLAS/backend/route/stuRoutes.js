// const express=require("express")
// const route=express.Router()
// const stuController=require("../Controllers/stuControllers")
// route.get("/home",stuController.homePage)
// route.post("/save",stuController.studentSave)
// route.get("/display",stuController.dataDisplay)
// route.get("/updateshowdata",stuController.updateShow);
// route.delete("/datadelete",stuController.dataDelete);

// module.exports= route



const express=require("express")
const route=express.Router()
const stuController=require("../Controllers/stuControllers")
route.get("/home",stuController.homePage)
route.post("/save",stuController.studentSave)
route.get("/display",stuController.dataDisplay)
route.get("/updateshowdata",stuController.updateShow)
route.delete("/datadelete",stuController.dataDelete)
route.get("/editdatashow",stuController.editdataShow);
route.put("/editdatasave",stuController.editDataSave);
route.get("/getsearchdata",stuController.getSearchData);


module.exports= route;