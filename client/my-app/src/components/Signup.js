import React, { useEffect, useState } from 'react'
import "./signup.css"
import {Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
function Signup() {
  const [name,setName]=useState();
  const [mobileno,setMobileno]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate=useNavigate();
  const notifyA=(message)=> toast.error(message);
  const notifyb=(message)=> toast.success(message,{
    position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
// transition: Bounce,
  });
  const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passregex=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const mobileRegex=/^[6-9]\d{9}$/;

  const postdata=()=>{
    
    if(!emailRegex.test(email))
      {console.log("invalid email")
        notifyA("invalid email")
        return;
        
      }
      else if(!passregex.test(password))
        {
          notifyA("Password must contain atleast 8 characters including no's ,alphabets and special characters #")
          return;
        }
        else if(!mobileRegex.test(mobileno))
        {
          notifyA("invalid phone no")
          return;
        }
    fetch("http://localhost:5000/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:name,
        mobileno:mobileno,
        email:email,
        password:password
      })
    }).then(res=>res.json()).then(
      data=>
        {
        console.log(data)
        notifyb("Registered successfully")

      navigate("/signin");}

    ).catch(err=>console.log(err))
  }
// useEffect(()=>{postdata()},[])
  return (
    
    <div className="signUp">
     <div className="form-container">
      <div class="form">
<h1 id="signuphead">Create your account</h1>
<p className='loginPara'>
  Register to see your orders<br />and recently viewed items

</p>
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
  <input type="text" name="name"id="name" 
  value={name}
   placeholder="Full name" 
   onChange={(e)=>{
    setName(e.target.value)}}
     />
</div>
     
     <div>
     <input type="number" name="mobileno"id="mobileno" 
     value={mobileno}
      placeholder="Mobile no"
     onChange={(e)=>{
      setMobileno(e.target.value);}}
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
   <p className="loginPara" style={{fontSize:"12px", margin:"3px 0px"}}>
    By signing up ,you agree to our terms ,<br />privacy and cookies policies
   </p>
   <input type="submit" id="submit-btn" value="Register"
    onClick={()=>{
    postdata();
   }}
   />
   </div>
   <div className="form2">
    Already have an account ?
   <Link to="/signin">
    <span style={{color:"blue",cursor:"pointer"}}>Login</span>
    </Link>
   </div>
</div>

    </div>
  )
}



export default Signup