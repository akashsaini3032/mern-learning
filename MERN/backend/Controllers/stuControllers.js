// const stuModels = require("../Modles/stuModels")

// const homePage=(req,res)=>{
//   console.log("iam homePage fnc")
//   res.send("ok")
// }
// const studentSave=(req,res)=>{
//  const{rollno,name,city,fees}=req.body 
// const student=stuModels.create({
//     rollno:rollno,
//     name:name,
//     city:city,
//     fees:fees
// })
// res.send({msg:"Yah message backend se aaya hai",myData:student})
// }

// const dataDisplay=async(req,res)=>{
//   const Data= await stuModels.find();
//   res.send(Data);
// }


// const updateShow=async(req,res)=>{
//   const Data= await stuModels.find();
//   res.send(Data);
// }


// const dataDelete=async(req,res)=>{
//   const {myid}=req.query;
//   const Data= await stuModels.findByIdDelete(myid);
//   res.send({msg:"data deleted", Data:Data});
// }
// module.exports={
//     homePage,studentSave,dataDisplay,updateShow,dataDelete
// }



const stuModels = require("../Modles/stuModels");

const homePage = (req, res) => {
  console.log("iam homePage fnc");
  res.send("ok");
};
const studentSave = (req, res) => {
  const { rollno, name, city, fees } = req.body;
  const student = stuModels.create({
    rollno: rollno,
    name: name,
    city: city,
    fees: fees,
  });
  res.send({ msg: "Yah message backend se aaya hai", myData: student });
};

const dataDisplay = async (req, res) => {
  const Data = await stuModels.find();
  res.send(Data);
};

const updateShow = async (req, res) => {
  const Data = await stuModels.find();
  res.send(Data);
};
const dataDelete = async (req, res) => {
  // console.log("Delete function called")
  // res.send("Okkkk")

  // console.log(req.query)

  res.send("oooooooo");
  const { myid } = req.query;
  const Data = await stuModels.findByIdAndDelete(myid);
  res.send({ msg: "data deleted", Data: Data });
};

module.exports = {
  homePage,
  studentSave,
  dataDisplay,
  updateShow,
  dataDelete,
};