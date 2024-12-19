import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import logo from "../images/LOGO.jpg";
import { FaRegHeart } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { logincontext } from "../context/logincontext";
import { CgAddR } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuvisible, setmenuvisible] = useState(false);
  const [query, setquery] = useState("");
  const { setmodalopen } = useContext(logincontext);
  const token = localStorage.getItem("jwt");
  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/product/${query.trim()}`);
    }
  };
  useEffect(() => { }, [query])
  const loginstatus = () => {
    if (token) {
      return [
        <>
          <Link to="/addaproduct"> <li className="item item4"> <CgAddR />Add</li></Link>
          <Link to="/cart"> <li className="item item4">  <FaShoppingCart style={{ fontWeight: "bolder", fontSize: "15px" }} /> Cart   </li></Link>
          <Link to="/wishlist"> <li className="item item4 "> <FaRegHeart></FaRegHeart> Wishlist </li></Link>
          <Link to="/profile"> <li className="item item4  "> <CgProfile />   Profile </li></Link>
          <Link to=" "><li className=" item item4 " onClick={() => setmodalopen(true)}><ImCross /> Log Out </li></Link>
        </>
      ]
    }
    else {
      return [<>
        <Link to="/signin"><li className="item item4">Login </li></Link>
      </>]
    }
  }
  return (
    <Link to="/"><div className="navb">
      <div><img className="logo" src={logo} alt="" onClick={() => { navigate("/") }} /></div>

      <div className="searcho"> <input type="search" name="search" id="search"
        onKeyPress={(e) => {
          if (e.key === "Enter") {handleSearch();
            setquery("");
          }
        }} value={query} onChange={(e) => { setquery(e.target.value) }}
        className="search-input" placeholder="Search for item" />
      </div>
      <div className="navb2">
        <li className={menuvisible ? "item hide item3 " : "item show "} >
          <FiMenu onClick={() => { setmenuvisible(!menuvisible); }} style={{ fontWeight: "bolder", fontSize: "33px" }} /></li>
        <li className={menuvisible ? "item show " : "item hide item3"} >
          <ImCross onClick={() => { setmenuvisible(!menuvisible); }} style={{ fontWeight: "bolder", fontSize: "33px" }} /></li>
        {loginstatus()}
      </div>
    </div>

      {token ? menuvisible && <div className="sidebar">
        <Link to="/addaproduct"> <li className="item" onClick={() => setmenuvisible(false)}> Product-add</li></Link>
        <Link to="/cart"> <li className="item" onClick={() => setmenuvisible(false)}>  Cart </li></Link>
        <Link to="/wishlist"> <li className="item " onClick={() => setmenuvisible(false)}> Wishlist </li></Link>
        <Link to="/profile"> <li className="item " onClick={() => setmenuvisible(false)}> Profile</li></Link>
        <Link to=" "><li className=" item " onClick={() => {
          setmodalopen(true);
          setmenuvisible(false);
        }} > Log Out </li></Link>
      </div> : menuvisible && <div className="sidebar">
        <Link to="/signin"><li className="item " onClick={() => setmenuvisible(false)}>Login </li></Link>
      </div>}
    </Link>
  )
};
