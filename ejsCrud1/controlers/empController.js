
const EmpModel=require("../models/empModels");


const homePage=(req, res)=>{
   

    res.render("home");
}

const insertPage=(req, res)=>{
   

    res.render("insert");
    console.log("OKKK");
    res.send("kkkk");
}


const dataSave=(req,res)=>{
    const {eno, name ,city, sal}=req.body;
    EmpModel.create({
        empno:eno,
        name:name,
        city:city,
        salary:sal
    })
    res.render("insert");
}

const displayPage=async(req,res)=>{
    const Data=await EmpModel.find();
    res.render("display",{Mydata:Data});
}




module.exports={
    homePage,
    insertPage,
    dataSave,
    displayPage
}