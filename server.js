const express = require("express");
const port = 80;
const host = "htpp://localhost";
const path = require("path");
const page = express();
page.use(express.static(path.join(__dirname,"static")));
page.use(express.static(path.join(__dirname,"resources")));

page.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"));
})

page.listen(8000,()=>{
    console.log("The server is running on 80000");
})
export default app
