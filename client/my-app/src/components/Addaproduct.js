import React, {  useState } from 'react'
import "./Addproduct.css"
import { toast } from 'react-toastify';
export default function Addaproduct() {
    const [body, setBody] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [image, setImage] = useState();
    const [pic, setPic] = useState();
    const notifyA = (message) => {
        toast.success(message);
    }
   
    const loadfile = (event) => {
        setPic(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0]);
    }
    // saving photos in cloudinary
    const postdetails = () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "socialclone");
        data.append("cloud_name", "sweetycloud");
        fetch("https://api.cloudinary.com/v1_1/sweetycloud/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json()).then(data => 
            postdata(data.url))
            .catch(err => console.log(err))
    }

    const postdata = (url) => {
        
            fetch(`${process.env.REACT_APP_URL}/addaproduct`,
                {
                    method: "post",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("jwt")
                    },
                    body: JSON.stringify(
                        {
                            title: title,
                            body: body,
                            price: price,
                            category: category,
                            photo: url
                        }
                    )
                }
            ).then(res => res.json()).then(data => {if(data.error){
                notifyA(data.error)
            }
            
                notifyA(data.message)
            }
           

            ).catch(err => console.log(err))
        
    }
    return (

        <div className='main2' >
            <div>
                <h1 style={{ textAlign: "center",color:"purple", fontWeight:"bolder", fontStyle:"italic" }} >Add a product</h1>
                <img style={{ height: "200px", width: "100%" }} src={pic}  alt="product" className='productimage'></img>
                <input type="file"  accept='image/*' onChange={loadfile}></input>
            </div>
            <div className=" box" >
                <textarea placeholder='Add title' className='textar' value={title} onChange={(e) => { setTitle(e.target.value) }}></textarea>
                <textarea placeholder='Add body' className='textar' value={body} onChange={(e) => { setBody(e.target.value) }}></textarea>
                <div> Category:  <input type="text" id="category" placeholder='Category ' value={category} onChange={(e) => { setCategory(e.target.value) }} ></input></div>
                <div> Price:  <input type="number" id="price" placeholder='Price ' value={price} onChange={(e) => { setPrice(e.target.value) }}></input></div>
            </div>
            <input type="submit" id="btn3" value="Post a product" onClick={() => {
                postdetails();
            
                setTitle("");
                setBody("");
                setPrice("");
                setPic("");
                setImage("");
                setCategory("");
            }} />
        </div>

    )
}
