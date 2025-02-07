import React, { useEffect, useState } from 'react'

export default function Wishlist() {
   const [data , setdata]=useState([]);
   useEffect(()=>{
    fetch(`${process.env.REACT_APP_URL}/mywishlist`,{
        method:"get",
        headers:{
            "Content-Type": "application/json",
        "Authorization":  "Bearer "  +localStorage.getItem("jwt"),

        },
    }).then(res=>res.json()).then(post=>{setdata(post);
        console.log(post);

    }).catch(err=>console.log (err))},[])
  return (
    <div className='temp'>
      {data.length===0 ?<><p style={{fontWeight:"bold" , fontStyle:"italic",display:"block" , fontSize:"1rem"}}> Didn't like anything ,
    please go and check the items that suits you . </p></>:data.map((posts,index)=>(
 <div className='product-card' key={index} >
 <div><img src={posts.photo} alt="product" className='product-image'/></div>
 
 <div className='para'>{posts.title}<br /></div>

 <div className='tofle'>Price : {posts.price} Rs</div>
 
 
 </div>
      ))}

    </div>
  )
}

