import express from 'express'
import cors from 'cors'
import {connectDB} from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRouter.js'
import orderRouter from './routes/orderRoute.js'

// app config
const app = express()
const port = process.env.PORT || 4000

const allowedOrigins = ["http://localhost:5173",
                        "http://localhost:5174",
                        "https://food-delivery-frontend-p9by.onrender.com",
                        "https://food-delivery-admin-r6z0.onrender.com"
                       ]


//Cors Setup
app.use(cors({
    origin: function(origin,callback){
        if(!origin || allowedOrigins.includes(origin)){
            callback(null,true)
        } else{
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials:true
}))

// middleware 
app.use(express.json())


//db connection
connectDB()

//api endpoints
app.use('/api/food',foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
        res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://darshan:darshan123@cluster0.jdxlm.mongodb.net/?
