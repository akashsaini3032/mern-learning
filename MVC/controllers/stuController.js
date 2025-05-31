

const homePage=(req, res)=>{
    // res.send("Okk");

    res.render("home");
}

const aboutPage=(req, res)=>{
    // res.send("Okk");

    res.render("about");
}

const coursesPage=(req, res)=>{
    // res.send("Okk");

    res.render("courses");
}


const facultyPage=(req, res)=>{
    // res.send("Okk");

    res.render("faculty");
}


const contactPage=(req, res)=>{
    // res.send("Okk");

    res.render("contact");
}






module.exports={
    homePage,aboutPage,coursesPage,facultyPage,contactPage
}