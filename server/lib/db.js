import mongoose from "mongoose"

// function to connect to mongodb databse
export const connectDB = async ()=>{
    try{
        mongoose.connection.on("connected", ()=>console.log("Database connected"))
        await mongoose.connect(`${process.env.MONGODB_URI}/quick-chat`)
    }catch(error){
        console.log(error);
    }
}
