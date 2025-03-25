import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const frontend_url = "https://food-delivery-frontend-p9by.onrender.com"

// Placing user order for frontend 
const placeOrder = async (req,res) =>{

  

try {
    const newOrder = new orderModel({
        userId: req.body.userId,
        items:req.body.items,
        amount:  req.body.amount,
        address: req.body.address
    })
    await newOrder.save()
    await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}}) //clear the cart data

    const line_items = req.body.items.map((item)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:item.name
            },
            // unit_amount:item.price*100*80
            unit_amount:item.price*100
        },
        quantity:item.quantity
    }))

    line_items.push({
        price_data:{
            currency:"inr",
            product_data:{
                name:"Delivery Charges"
            },
            // unit_amount:2*100*80  // for 2 doller -- 2*100 and 80 is converted into indian doller
            unit_amount:2*100
        },
        quantity:1
    })

    const session = await stripe.checkout.sessions.create({
        line_items:line_items,
        mode:'payment',
        success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
    })

    res.json({success:true,session_url:session.url})
} catch (error) {
        console.error("Error placing order:", error)
        res.status(500).json({success:false,message:"Error"})
        // res.json({success:false,message:"Error"})
}
}

const verfyOrder = async (req,res)=>{
    const {orderId,success} = req.body;
    try {
        const order = await orderModel.findById(orderId)
        if(!order){
            return res.status(404).json({success:false,message:"Order not found"})
        }
        if(success==="true" || success === true){
            order.payment = true;
            await order.save()
          return res.json({success:"true",message:"Payment Successful"})
        }
        else{
            await orderModel.findByIdAndDelete(orderId)
            return res.json({success:"false",message:"Payment Failed, Order Cancelled"})
      
        }
    } catch (error) {
        console.error("Error verifying order:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
   
    }
}

// user orders for frontend
const userOrders = async (req,res) =>{
    try {
        const orders = await orderModel.find({ userId: req.body.userId }).sort({ createdAt: -1 }); // Sorting by newest orders first
        res.json({success:true,data:orders})
    } catch (error) {
         console.error("Error fetching user orders:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// listing Orders for Admin panel
const listOrders = async (req,res)=>{
    try {
        const orders = await orderModel.find({}).sort({createdAt:-1})
        res.json({success:true,data:orders})
    } catch (error) {
          console.error("Error listing orders:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//Api for updating order status 
const updateStatus = async (req,res) =>{
    try {
        const updateOrder = await orderModel.findByIdAndUpdate(
            req.body.orderId,
            {status:req.body.status},
            {new:true} //Return updated order
        )
        if(!updateOrder){
            return res.status(404).json({success:false,message:"Order not found"})
        }
        res.json({success:true,message:"Status Updated"})
    } catch (error) {
           console.error("Error updating order status:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
   
    }

}
export {placeOrder,verfyOrder,userOrders,listOrders,updateStatus}
