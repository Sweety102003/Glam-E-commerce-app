const mongoose=require("mongoose");
const {ObjectId}=mongoose.SchemaTypes;
const postSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    price:{

        type:Number,
        required:true,
    },
    category:
    {
        type:String,
        required:true,
    },
   photo:{
    type:String,
    required:true
   },
    postedby:{
     type:ObjectId ,
     ref:"USER"
    }
    
  

})
const POST=mongoose.model("POST",postSchema);
module.exports=POST;