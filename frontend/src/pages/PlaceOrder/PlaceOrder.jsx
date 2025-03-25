import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css'
import { StoreContext } from '../../components/Context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)
const [data,setdata] = useState({
  firstName:"",
  lastName:"",
  email:"",
  street:"",
  city:"",
  state:"",
  zipcode:"",
  country:"",
  phone:"",
})

const onChangeHandler = (e) =>{
  const name = e.target.name;
  const value = e.target.value;
  setdata(data=>({...data,[name] : value }))
}

const placeOrder = async(e) =>{
  e.preventDefault()
  let orderItems = [];
   food_list?.forEach((item)=>{
    if(cartItems[item._id]>0){
      orderItems.push({...item,quantity:cartItems[item._id]})
    }
  })
  if (orderItems.length === 0) {
    alert("Your cart is empty. Add items before placing an order.");
    return;
  }
  let orderData = {
    address:data,
    items:orderItems,
    amount:getTotalCartAmount()+2,
  }
  try{
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
  console.log("Api Respone",response.data)
  if(response.data.success){
    const {session_url} = response.data;
    window.location.replace(session_url)
  }
  else{
    alert("Error"+response.data.message)
  }
}
catch(error){
  console.log("Order Placement Error",error)
  alert("An error occured while placing")
}
  }

  const navigate = useNavigate()
  
  if (orderItems.length === 0) {
    alert("Your cart is empty. Add items before placing an order.");
    return;
  }


  return (
    <form onSubmit={placeOrder} className="place-order container">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name'/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName}  type="text" placeholder='Last Name'/>
        </div>
        <input required  name='email' onChange={onChangeHandler} value={data.email}  type="text" placeholder='Email Address'/>
        <input required name='street' onChange={onChangeHandler} value={data.street}  type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input required name='city' onChange={onChangeHandler} value={data.city}  type="text" placeholder='City'/>
          <input required name='state' onChange={onChangeHandler} value={data.state}  type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input required  name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code'/>
          <input required  name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'/>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone}  type="text" placeholder='Phone'/>

      </div>


      <div className="place-order-right">
            <h2>Cart Totals</h2>
            <div>
            <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
              <button type='submit' className='cart-total-btn'>PROCEED TO PAYMENT</button>
            </div>
            
      </div>
    </form>
  );
}

export default PlaceOrder;
