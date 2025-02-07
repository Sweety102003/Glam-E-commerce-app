import React ,{useState} from 'react'
import "./signin.css"
import {Link, useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';
function Signin() {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const notifyA=(message)=>{
    toast.success(message);
  }
  const notifyb=(message)=>{
    toast.error(message);
  }
  const navigate=useNavigate();
  const postdata=()=>{
    fetch(`${process.env.REACT_APP_URL}/signin`,{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        
        email:email,
        password:password
      })
    }).then(res=>res.json()).then(
      data=>{
        if(data.error){
          notifyA(data.error)
        }else{
        console.log(data.data);
        localStorage.setItem("jwt" ,data.data);
        notifyA(data.message);
        if(data.data){
        navigate("/");}}
      }
    ).catch(err=>{console.log(err)
      ;
      notifyb(err);
    })
  }
  return (
    <div className='signIn'>
    <div class="form1">
      <div className='loginForm'>
      <h1 id="signuphead">Login to your account</h1>
      <div>
      <input type="email" name="email"id="email" 
      value={email} 
      placeholder="Email" 
      onChange={(e)=>{
  setEmail(e.target.value);
}}
/>
      </div>
      <div>
      <input type="password" name="password"id="password" 
      value={password}  
      placeholder="Password" 
   onChange={(e)=>{
    setPassword(e.target.value);}}
    />
 </div>
 <input type="submit" id="login-btn" value="Login" 
 onClick={()=>{postdata()}} 
 />
      </div>
      <div className="loginForm2">
        Don't have an account ? 
        <Link to="/signup">
        <span style={{color:"blue",cursor:"pointer"}}>Create account</span></Link>
      </div>
    </div>
  </div>
  )
}

export default Signin