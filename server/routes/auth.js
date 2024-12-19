const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");
const USER = require("../modals/model");
const jwt=require("jsonwebtoken");
const JWT_SECRET=process.env.JWT_SECRET;
router.get('/',(req,res)=>{
    res.send("hello");
})
router.post("/signup",(req,res)=>{
    const {name, mobileno, email,password}=req.body;
    if(!email || ! name || !mobileno || !password)
    {
        return res.status(422).json({message:"Please enter all the fields"})
    }
    bcrypt.hash(password,12).then(hashedpassword=>{
    const user=new USER({
        name,
        mobileno,
        email,
        password:hashedpassword
    })
    // console.log(hashedpassword)
    user.save().then(user=>res.json(user)).catch(err=>{console.log(err)})});
})
router.post("/signin",(req,res)=>{
    const {email ,password}=req.body;
    if(!email || ! password){
        return res.status(422).json({message:"Please enter all the fields"})
    }
    USER.findOne({email:email}).then(saveduser=>{
        if(!saveduser)
        {
            return res.json({message:"Invalid email"})
        }
        bcrypt.compare(password,saveduser.password).then(match=>{
            // console.log(saveduser.password);
            if (match){
                const token=jwt.sign({_id:saveduser.id},JWT_SECRET);
                return res.json({message:"signed in successfully" ,data:token})
            }
              res.json({message:"Invalid password"})
        }).catch(err=>console.log(err))

    })
})
module.exports=router;