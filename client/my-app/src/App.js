
import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { SliderData } from './components/SliderData';
import Categorycard from './components/Categorycard';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Addaproduct from './components/Addaproduct';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart';
import Logout3 from './components/Logout3';
import Wishlist from './components/Wishlist';
import { logincontext } from './context/logincontext';
import { useEffect, useState } from 'react';
import Grocery from './components/Grocery';
import Profile from './components/Profile';
import Product from './components/Product';
function App() {
  const { category } = useParams();
  const [modalopen, setmodalopen] = useState(false);
  useEffect(() => {
  }, [])

  return (
    <BrowserRouter>
      <>
        <logincontext.Provider value={{ setmodalopen }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<>
              <Cards slides={SliderData} />
              <h1 className="heading" style={{textAlign:"center", fontWeight:"bolder", fontSize:"36px" , color:'purple',margin:"12px"} }> Shop by Categories</h1>
              <div className='itemboxes category'>
                <Categorycard />
              </div>
            </>} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/products/:category" element={<Grocery />} />
            <Route path="/addaproduct" element={<Addaproduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/product/:query' element={<Product />}/>
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>

          {modalopen && <Logout3 />}


          <ToastContainer theme='dark' position="top-right"
          />
        </logincontext.Provider>
      </>
    </BrowserRouter>
  );
}

export default App;
