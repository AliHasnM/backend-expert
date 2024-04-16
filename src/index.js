// import dotenv
import dotenv from "dotenv";
import connectDB from "./db/index.js";
// dotenv config with exact path
dotenv.config({
    path: './env'
})
// execution the database connection 
connectDB();