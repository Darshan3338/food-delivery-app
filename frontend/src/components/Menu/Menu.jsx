import React, { useEffect } from "react";
import "./Menu.css";
import { menu_list } from "../../assets/frontend_assets/assets";

const Menu = ({ category, setcategory }) => {
  useEffect(()=>{
    console.log("scroll in menu")
    window.scrollTo(0,0)
  },[])
  return (
    <div className="container text-center text-md-start" id="explore-menu">
      <h1 className="text-dark fw-medium">Explore our Menu</h1>
      <p className="text-secondary w-100 w-md-75 mx-auto mx-md-0">
        Choose from a divers menu featuring a delectable array of dishes crafted
        with the finest ingradients and culinary experts. Our mission is to
        satisfy your cravings and elevate your dining experience, one delicious
        meal at a time.
      </p>
      <div
        className="d-flex justify-content-between align-items-center gap-3 my-2 overflow-x-scroll"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setcategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className={`text-center position-reltive`}
              style={{width:'7.5vw',minWidth:'80px',cursor:'pointer'}}
            >
              <div className={`rounded-circle border ${category === item.menu_name ? 'border-4 border-danger p-1' : 'border-0'}`}
              >
                 <img
                src={item.menu_image}
                alt="img-items"
                className="img-fluid rounded-circle"
              />
              </div>
             
              <p className="mt-2 text-secondary fs-6">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className="my-3 border-2 text-secondary"/>
    </div>
  );
};

export default Menu;
