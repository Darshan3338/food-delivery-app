import React, { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavigationBar from "../components/Navbar/Navbar"
import Search from '../pages/Search';
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import PlaceOrder from '../pages/PlaceOrder/PlaceOrder'
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import FoodItem from '../components/FoodDisplay/FoodItem/FoodItem';
import LoginPop from '../pages/LoginPopup/LoginPop';

const AppRoutes = () => {
  const [showLogin,setshowLogin] = useState(false)
  return (
    <>
    {showLogin? <LoginPop setshowLogin={setshowLogin}/> : <></>}
      <Router>
        <NavigationBar setshowLogin={setshowLogin}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/placeorder" element={<PlaceOrder/>}/>
            <Route path="/contact-us" element={<Footer/>}/>
            <Route path="/menu/:id" element={<FoodItem/>}/>

        </Routes>
    </Router>
    <Footer/>
    </>
  
  );
}

export default AppRoutes;
