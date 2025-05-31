

const homePage=(req, res)=>{
    res.send("<h1> Doctor Home </h1>")
}

const specializationPage=(req,res)=>{
    res.send("<h1> Specialization Page </h1>")
}

const patientPage=(req,res)=>{
    res.send("<h1> Patient Page </h1>")
}

const contactPage=(req,res)=>{
    res.send("<h1> Contact Page")
}


module.exports={
    homePage,specializationPage,patientPage,contactPage
}