import React, { useEffect, useState } from 'react'
import "./Profile.css"
import { Navigate, useNavigate } from 'react-router-dom';

export default function () {
    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/user",
            {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt"),
                }
            }
        ).then(res => res.json()).then(user => {
            setdata([user]);
            console.log(user);
        }).catch(err => console.log(err));
    }, [])
    return (
        <div>
            {data.map((user) => (<div className='heading'>
                <h1 style={{ color: "purple", fontWeight: "bolder", fontStyle: "italic" }}> User Dashboard </h1>
                <div className="container">

                    <div>Name:<input type="text" name="name" id="name" className='item' value={user.name} /></div>
                    <div>Mobile No. :<input type="number" name="mobileno" id="mobileno" className='item' value={user.mobileno} /></div>
                    <div>Email :<input type="email" name="email" id="email" className='item' value={user.email} /></div>

                </div>
                <div className='orders'>
                    <h2 style={{ color: "purple" }}>
                        My Orders</h2>
                    <div className='container'>
                        <p> You haven't ordered anything .</p>
                        <button className='submit-btn4' onClick={() => { navigate("/"); }}>Place order</button></div>
                </div>
            </div>
            ))}
        </div>
    )
}
