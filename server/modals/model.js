const mongoose=require("mongoose");
const {ObjectId}=mongoose.SchemaTypes;
const userSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    mobileno:{
        type:String,
        required: true,

    },
    email:{
        type:String,
        required:true,
    },
password:{
    type:String ,
    required:true
},
cart:{
    type:[ObjectId],
    ref:"POST",
    default:[]
}
,
wishlist:{
    type:[ObjectId],
    ref:"POST",
    default:[]
}

})
const USER=mongoose.model("USER", userSchema);
module.exports=USER;