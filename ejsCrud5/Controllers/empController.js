


const empModel = require("../Models/empModel");

const homePage = (req, res) => {
  res.render("home");
};

const insert = (req, res) => {
  res.render("insert");
};

const displayPage = async (req, res) => {
  const Data = await empModel.find();
  res.render("display", { MyData: Data });
};

const dataSave = (req, res) => {
  const { eno, nm, cty, sal } = req.body;
  empModel.create({
    empno: eno,
    name: nm,
    city: cty,
    salary: sal,
  });
  res.render("insert");
};

const updatePage = async (req, res) => {
  const Data = await empModel.find();
  res.render("update", { MyData: Data });
};

const dlt = async (req, res) => {
  const { id } = req.query;
  await empModel.findByIdAndDelete(id);
  const Data = await empModel.find();
  res.render("update", { MyData: Data });
};

const searchPage = (req, res) => {
    let Data=[]
  res.render("search", { Data: Data });
};

const searchData = async (req, res) => {
  const { eno } = req.body;
  const Data = await empModel.find({ empno: eno });
  res.render("search", { Data :Data});
};

const editData = async (req, res) => {
  const { id } = req.query;
  const Data = await empModel.findById(id);
  res.render("editPage", { Data });
};

const editDataSave = async (req, res) => {
  const { id, eno, nm, cty, sal } = req.body;
  await empModel.findByIdAndUpdate(id, {
    empno: eno,
    name: nm,
    city: cty,
    salary: sal,
  });
  const Data = await empModel.find();
  res.render("update", { MyData: Data });
};

module.exports = {
  homePage,
  insert,
  displayPage,
  dataSave,
  updatePage,
  dlt,
  editData,
  editDataSave,
  searchPage,
  searchData,
};



// //   id k through pure object milta warna array milta
