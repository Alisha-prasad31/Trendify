import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Collection from 'pages/Collection';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Product from '../src/pages/Product';
import Cart from 'pages/Cart';
import PlaceOrder from 'pages/PlaceOrder';
import Login from 'pages/Login';
import Orders from 'pages/Orders';
import Navbar from "./components/Navbar";
import Footer from '../src/components/Footer';
import SearchBar from '../src/components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';



const App = () => {
  return (
    <div className='px-4 sm:px-[5vm] md:px-[7vw] lg:px=[9vw]'>
      <ToastContainer /> 
      <Navbar/>
      <SearchBar />
      

  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path='/about' element={<About/>} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={< Orders/>} />
        
      </Routes>
      
      
      <Footer />
    
    </div>
      
  );
};

export default App;
