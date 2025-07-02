const mongoose=require("mongoose")

const empModel=mongoose.Schema({
    empno:Number,
    name:String,
   city:String,
   salary:Number
})

module.exports=mongoose.model("tnpEmployee",empModel)