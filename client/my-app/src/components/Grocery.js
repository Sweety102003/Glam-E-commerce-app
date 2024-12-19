import React, { useEffect, useState } from 'react'
import "./product.css"
import { FaRegHeart } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

function Grocery() {
  const [data, setData] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/products/${category}`

    ).then(res => res.json()).then(posts => {
      // console.log(posts);
      setData(posts)
    }).catch(err => console.log(err))
  }, [])

  const postdata = (productid) => {
    // console.log(productid);
    fetch("http://localhost:5000/addtocart", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify(
        {
          id: productid,
        }

      )
    }
    ).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
  }

  const postdatatowishlist = (productid) => {
    fetch("http://localhost:5000/wishlist", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        id: productid,
      })
    }).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))

  }
  return (

    <div className='temp'>
      {/* {if(data.length==0)} */}
      {data.length === 0 ? (<p> No products available</p>) : (data.map((poste, index) => (

        <div className='product-card' key={index}>

          <div><img src={poste.photo} alt="Grocery product" className='product-image' /></div>

          <div className='para'> {poste.title}<br /></div>
          <div className='para'>{poste.body}</div>
          <div className='tofle'>Price :{poste.price}Rs

            <span onClick={() => {
              postdatatowishlist(poste._id);
            }} ><FaRegHeart /></span>
          </div>
          <div>  <button id="submit-btn2" onClick={() => {


            postdata(poste._id);
          }}>
            Add to Cart
          </button></div>
        </div>

      )))} </div>
  )

}

export default Grocery