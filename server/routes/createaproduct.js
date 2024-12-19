const requirelogin=require("../middleware/requirelogin")
const USER=require("../modals/model.js")
const POST=require("../modals/post.js")
const express=require("express")
const router=express.Router();
router.post("/addaproduct", requirelogin,(req,res)=>{
const {title,body,price,category,photo}=req.body;
if(!title || !body || !price || !category ||! photo)
{
    return res.json({message:"Please enter all the fields"})
}
const post= new POST({
    title,
    body,
    price,
    category,
    photo,
    postedby:req.user
})
post.save().then(posts=>res.json({message:"posted successfully"})).catch(err=>console.log(err))

})
router.get("/user",requirelogin,async(req,res)=>{
const user=await USER.findById(req.user._id);
console.log(user);
return res.json(user);
})
router.post("/addtocart",requirelogin,async(req,res)=>{
   const id =req.body.id;
   console.log(id);
console.log(req.user);
const post= await POST.findOne({_id:id});

const updateduser= await USER.findByIdAndUpdate(req.user._id,
    { $push: {cart: id } },
            { new: true }
);


// console.log(updateduser);
 return res.json({message:"product gets added to cart",cart:updateduser.cart});



})
router.post("/wishlist",requirelogin,async(req,res)=>{
const id=req.body.id;
console.log(id);
const updateduser=await USER.findByIdAndUpdate(
    req.user._id,
    { $push:{wishlist:id}}
    ,{new:true}
);

console.log(updateduser);
 return res.json({message:"Product gets added to the wishlist " , wishlist:updateduser.wishlist})


})

router.get("/mycart", requirelogin,async(req,res)=>{
    const user = await USER.findById(req.user._id).populate("cart","_id title photo price");
    // console.log(user.cart)  ;
      res.json(user.cart);}

)
router.get("/mywishlist",requirelogin ,async(req,res)=>{
    const user= await USER.findById(req.user._id).populate("wishlist" ,"_id title photo price");
return res.json(user.wishlist);
console.log(user.wishlist);
})
router.get("/products/:category",async(req,res)=>{
    const {category}=  req.params;
    console.log(category);
   const post= await POST.find({ category: { $regex: new RegExp(`^${category}$`, "i") } });
    
return res.json(post);
})
// router.get("/products/homedecoration",(req,res)=>{
//     POST.find({category:"homedecor"}).then(groceryproducts=>res.json(groceryproducts)).catch(err=>console.log(err))
// })
router.post("/removecart",requirelogin,async(req,res)=>{
    const {id}=req.body;
    const user=await USER.findOneAndUpdate(req.user._id ,
        {$pull:{cart:id}},
        {new:true}
,
    );
  return   res.json(user);


})
router.get("/product",async (req,res)=>
{
    const {q}=req.query;
    const filter={};
    if (q) {
        filter.$or = [
            { body: { $regex: q, $options: 'i' } }, // Case-insensitive search in `body`
            { title: { $regex: q, $options: 'i' } } // Case-insensitive search in `title`
        ];
      }

      const post=await POST.find(filter);
return res.json(post);
})

module.exports=router;
