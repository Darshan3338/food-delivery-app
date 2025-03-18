import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://darshan:darshan123@cluster0.jdxlm.mongodb.net/Food_Del').then(()=>{
        console.log("Db Connected..")
    })
}