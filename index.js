const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="http://localhost:3001/login">Admin Login</a>
</body>
</html>`)
})

app.get("/login",(req,res)=>{
    res.render("login.ejs");
})
app.post("/login",(req,res)=>{
    let {email,pass} = req.body;
    
    res.send("submited");
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})