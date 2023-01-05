import React ,{useState}from "react";
import Navbar from "./components/navbar2";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sanjana from "./components/pages/Sanjana";
import Zahid from "./components/pages/Zahid";
import Arjun from "./components/pages/Arjun";
import Lakshay from "./components/Lakshay.jsx";
import Sanket from "./components/pages/Sanket";
import Madina from './components/pages/Madina';
import Dinesh from "./components/pages/Dinesh";
import AddProducts from "./components/pages/AddProducts";
import ProductInfo from "./components/pages/products";
import MyItems from "./components/pages/MyItems";
import { AccountBox } from "./components/accountBox/AccountBox";
import Footer from "./components/footer";



function App() {
  const [user, setUser]= useState(sessionStorage.getItem('user_id'));
  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route index element={<Home user={user} />} />
        <Route path="/sanjana" element={<Sanjana user={user} />} />
        <Route path="/zahid" element={<Zahid />} />
        <Route path="/arjun" element={<Arjun />} />
        <Route path="/lakshay" element={<Lakshay />} />
        <Route path="/Sanket" element={<Sanket />} />
        <Route path='/Madina' element={<Madina />} />
        <Route path='/Dinesh' element={<Dinesh />} />
       <Route path="/addproducts" element={<AddProducts user={user} />} />
        <Route path="/product/:productId" element={<ProductInfo user={user}/>} />
        <Route path="/MyItems" element={<MyItems user={user}/>} />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
