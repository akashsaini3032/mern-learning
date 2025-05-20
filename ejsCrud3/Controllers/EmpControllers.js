
const EmpModels = require("../Models/EmpModels")
const Home = (req, res) => {
    res.render("home");
}
const Insert = (req, res) => {
    res.render("insert");
}

const SaveData = (req, res) => {
    console.log(req.body);
    const { id, name, position, salary } = req.body;

    EmpModels.create({
        empId: id,
        empName: name,
        empPosition: position,
        empSalary: salary
    })


        res.render("insert");
}
const DisplayData =async(req,res)=>{
      const empData = await EmpModels.find();
      console.log(empData);
      
      res.render("display",{empData})
}


const updatePage=async(req,res)=>{
    const Data= await EmpModels.find();
    res.render("update",{empData:Data});
}

const deleteData=async(req,res)=>{
    const {id}=req.query;
    await EmpModels.findByIdAndDelete(id);
    const Data=await EmpModels.find();
    res.render("update", {empData:Data});
}


const editData=async(req,res)=>{
    const {id} =req.query;
    const Data= await EmpModels.findById(id);

    console.log(Data);
    res.render("editdata", {Data:Data});


    
}

const editDataSave=async(req,res)=>{

    const {id, idd, name, city, salary}=req.body;
    await EmpModels.findByIdAndUpdate(id, {
      empId: idd,
    empName: name,
    empPosition: city,
    empSalary: salary,

    })
    // console.log(req.body);
    // res.send("OKKK")

    const MyData= await EmpModels.find();
    res.render("update", {MyData:MyData});
}


module.exports = { Home, Insert, SaveData,DisplayData,updatePage,deleteData,editData,editDataSave }