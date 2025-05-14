

const express = require("express");
const app = express();
const PORT  = 4000;

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello world!");
})

app.post("/login",(req,res)=>{

const {email,pass} = req.body;

if(!email){
    return res.status(400).json({
        error:"Email cannot be empty"
    })
}

if(!pass){
    return res.status(400).json({
        error:"Password cant be empty"
    })
}

res.json({
message:"Login successful",
email:email
})

})

app.listen(PORT,()=>{
    console.log(`This server is running : http://localhost:${PORT}`);
    
})