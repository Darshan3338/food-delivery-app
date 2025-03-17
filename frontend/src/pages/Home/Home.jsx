import React, { useState } from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownlod from '../../components/AppDownloads/AppDownlod';
const Home = () => {
  const [category,setcategory] = useState("All")
  return (
    <div className="container text-center mt-5">
         <Header/>
         <Menu category={category} setcategory={setcategory}/>
         <FoodDisplay category={category} setcategory={setcategory}/>
         <AppDownlod/>
    </div>
  );
}

export default Home;
