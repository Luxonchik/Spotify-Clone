import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL);
        console.log(`Connected to MongoDB ${conn.connection.host}`)
    } catch (error) {
        process.exit(1);
        console.log("Failed to connect to MongoDB", error)
        
    }
}