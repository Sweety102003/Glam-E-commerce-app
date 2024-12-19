const mongoose=require("mongoose");
const USER=require("../modals/model");
const JWT_SECRET=process.env.JWT_SECRET;
const jwt=require("jsonwebtoken");
module.exports=async (req,res,next)=>{
    const {authorization}= await req.headers;
    // console.log(req);
    if(!authorization)
    {
        return res.status(422).json({message:"user must have logged in mien"})
    }
    const token= await authorization.replace("Bearer ","");
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
if(err){
    return res.json({message:"user must have logged in 2" });
}
const {_id}=payload;
// console.log(_id);
USER.findById(_id).then(userdata=>
  { 
    // console.log(userdata);
    req.user=userdata;
    // console.log(req.user);

    next();
  }

).catch(err=>console.log(err))
// console.log(req.user);

    })


   
}
