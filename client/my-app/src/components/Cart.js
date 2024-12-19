import React, { useState, useEffect } from 'react'
import "./Cart.css"
import { MdDelete } from "react-icons/md";
export default function Cart() {
  const [data, setdata] = useState([]);
  const [sum ,setSum]=useState();
const postdata=(productid)=>{
  fetch("http://localhost:5000/removecart",

    { method:"post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt"),
      },
      body:JSON.stringify({
        id:productid,
      })
    }
  ).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err));
}
  useEffect(() => {

    fetch("http://localhost:5000/mycart",
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt"),
        },
      }

    ).then(res => res.json()).then(posts => {
      setdata(posts);
      console.log(posts);

    }
    ).catch(err => console.log(err))
  }
 
    , [])
    useEffect(()=>{
      const total = data.reduce((acc, posts) => acc + posts.price , 0);
      setSum(total);
    },[data])
  return (
    <div className='cart-container'>
      {data.length===0 ?<><p style={{fontWeight:"bold" , fontStyle:"italic", fontSize:"1rem"}}>Bruh , you haven't added anything in cart . </p>
      <p style={{fontWeight:"bold" , fontStyle:"italic", fontSize:"1rem"}}> Please go and check the items that suits you </p></>
      :data.map((posts) => (
        
        <div className='cart-product' >
          <div  ><img src={posts.photo} alt="Grocery product" className='cart-image' /></div>

         <div> <div className='cart-para'>{posts.title}<br /></div>

          <div className='Cart-price'>Price : {posts.price} 
            Rs</div>
            <div className="button-position">
            <MdDelete onClick={()=>{postdata(posts._id)}} />
            </div>
         {/* <button   className='submit-btn-2'>Remove from Cart</button> */}
         </div></div>
      ))}
      <div className='cart-product-2' >

          <div className='cart-para'> Total :{sum} Rs <br /></div>

          <div className='Cart-price'><button className='submit-btn'>Proceed to checkout</button></div></div>

    </div>
  )
}
