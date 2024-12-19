import React, { useContext } from 'react'
import "./logout3.css"
import {RiCloseLine} from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { logincontext } from '../context/logincontext';

export default function Logout3() {
  const navigate=useNavigate();
  const {setmodalopen}=useContext(logincontext);
  return (
    <div className='darkBg' onClick={()=>setmodalopen(false)}>
    <div className="centered">
    <div className="modal">
        <div className="modalHeader">
            <h5 className='heading'>Confirm</h5>
            <button className='closeBtn' onClick={()=>setmodalopen(false)}>
<RiCloseLine></RiCloseLine>
            </button></div>
            <div className="modalContent">
                Are you really want to log out?
            </div>
            <div className="modalActions">
                <div className="actionsContainer">
                    <button className='logOutBtn' onClick={()=>{
setmodalopen(false);
localStorage.clear();
navigate("/")
                    }}>Log Out</button>
                    <button className='cancelBtn' onClick={()=>setmodalopen(false)}>cancel</button>
                </div>
            </div>
        </div>
    </div></div>
  )






    
  
}
