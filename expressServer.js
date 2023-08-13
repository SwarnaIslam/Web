const express=require("express");
const app=express();

const port=8001;
app.get("/",(req,res)=>{
    res.send("hello human");
});

app.listen(port,function(){
    console.log(port+" is running");
});