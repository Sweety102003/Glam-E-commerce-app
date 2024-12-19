import React from 'react';
import "./categorycard.css";
import { Link } from 'react-router-dom';
function Categorycard() {
  return (
    <>
    <div className='main'>
    <div className='itemcat'>
        <img className="catimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Ew4GjEvKHC-2WgPiUWaEtLENcq4Sxp5lTA&s" alt=""/>
       <Link to="./products/electronics"> Electronics</Link>
    </div>
    <div className='itemcat'>
        <img className="catimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NZ_m-tkpWGT_t5qAqKis3tUNdRvWiS9RGw&s" alt=""/>
        <Link to="/products/jewellary">Jewellary</Link>
    </div>
    <div className='itemcat'>
        <img className="catimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7kUacP3kkCpkKSttMc5vkz4iyrdJL9LpGRA&s" alt=""/>
       <Link to="/products/homedecor"> Home-decoration </Link>
    </div>
    <div className='itemcat'>
        <img className="catimage"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCjUCixpH4pXFqfqgQoJOfosg5-fNr6DBGQ&s" alt=""/>
       <Link to="/products/men">Men's Clothing</Link>
    </div>
    <div className='itemcat'>
        <img className="catimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iw7ETTEa9bgcl4N6_D_m9iL24LO6b16brA&s" alt=""/>
       <Link to="/products/Women"> Women's Clothing</Link>
    </div>
    <div className='itemcat'>
        <img className="catimage" src="https://images.meesho.com/images/products/162692177/gbk7w_1200.jpg" alt=""/>
        <Link to="/products/fragrances">Fragrances And Skin Care</Link>
    </div>
    <div className='itemcat'>
        <img className="catimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJzS0ZH4VRNZqE0rLyeiouddUjEq4IZWwhkA&s" alt=""/>
      <Link to="/products/grocery">Groceries</Link> 
    </div>
    <div className='itemcat'>
        <img className="catimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOn9Ku8VTXl0kOeubD9YMRz7cWgKKelL1yQ&s" alt=""/>
     <Link to="./products/kid" >Kids Section</Link>
    </div>
    </div>
    </>
  )
}

export default Categorycard