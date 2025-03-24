import React, { useContext, useEffect, useState } from 'react';
import "./MyOrders.css"
import { StoreContext } from '../../components/Context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/frontend_assets/assets';

const MyOrders = () => {

    const {url,token} =useContext(StoreContext)
    const [data,setdata] = useState([])
    
    const fetchOrders = async() =>{
        try{
            const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
            console.log("Fetched Orders",response.data.data)
            setdata([...response.data.data])
        }
        catch(error){
            console.error("Error fetching orders",error)
        }

        
    }
    // const fetchOrders = async() =>{
       
    //         const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
    //         console.log("Fetched Orders",response.data.data)
    //         setdata(response.data.data)
    

        
    // }

    useEffect(()=>{
        if(token){
            fetchOrders()
            const interval = setInterval(fetchOrders,5000)
            return ()=>clearInterval(interval)
        }
    },[token])
    // useEffect(()=>{
    //     if(token){
    //         fetchOrders()
    //     }
    // },[token])
  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {
            data.map((order,index)=>{
                return (
                    <div key={index} className="my-orders-order">
                        <img src={assets.parcel_icon} alt="parcel" />
                        <p>{order.items.map((item,index)=>{
                            if(index === order.items.length-1){
                                return item.name + " x " + item.quantity
                            }
                            else{
                                return item.name + " x " + item.quantity+", "

                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span><b>{order.status}</b></p>
                        <button onClick={()=>{fetchOrders()}}>Track Order</button>
                        {/* <button onClick={fetchOrders}>Track Order</button> */}
                    </div>
                )
            })
        }
      </div>
    </div>
  );
}

export default MyOrders;
