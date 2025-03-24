import React from 'react';
import './Order.css'
import { useState } from 'react';
import {toast} from 'react-toastify'
import { useEffect } from 'react';
import axios from 'axios'
import { assets } from '../../../../frontend/src/assets/frontend_assets/assets';

const Order = ({url}) => {
  const [orders,setOrder] = useState([])

  const fetchAllOrders = async () =>{
    try{
      const response = await axios.get(url + "/api/order/list")
      if(response.data.success){
        setOrder(response.data.data)       
      }
      else{
        toast.error("Error")
      }
    }
    catch(error){
      console.log("Fetch orders error:",error)
      toast.error("Failed to fetch orders")
    }
  }

  const statusHandler = async(e,orderId)=>{

    const newStatus = e.target.value;
    try {
      const response = await axios.post(url+"/api/order/status",{
        orderId,
        status:newStatus,
      });

      if(response.data.success){
        setOrder((prev)=>prev.map((order)=>
        order._id === orderId ? {...order, status:newStatus}: order
        ))
        toast.success("Orders status updated")
      }
      else{
        toast.error("Failed to update order status")
      }
    } catch (error) {
      console.error("Status update error",error)
      toast.error("Error updating status")
    }
  }


  useEffect(()=>{
    fetchAllOrders()
  },[])

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="parcel icon" /> 
            <div>
              <p className="order-item-food">
                {order.items.map((item,index)=>{
                  //if item reach last index then don’t take , after the item ex [{A, B, C}]
                  if(index===order.items.length-1){
                    return item.name + " x " + item.quantity
                  }
                  // except last item take , for all
                  else{
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street+","}</p>
                <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
              </div>
              <p className="order-item-phone">
                {order.address.phone}
              </p>              
            </div>
            
            <p>Items : {order.items.length}</p>
              <p>$ {order.amount}</p>
              <select onChange={(e)=>statusHandler(e,order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Order;
