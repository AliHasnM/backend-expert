import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";

// Database Connection (try_catch and async_await)
// Function to establish a connection to the MongoDB database using Mongoose
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using the connection string and database name
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`,
    );
    // Log a success message with the host of the connected database
    console.log(
      `\n Mongodb connected !! DB Host:${connectionInstance.connection.host}`,
    );
    // success message with host of the connected database
  } catch (error) {
    // If there is an error during connection, log an error message
    console.log("Mongodb connection failed.", error);
    process.exit(1);
    // process.exit(1) node js hamy access deta hai k hum process ko kahi b use kr sakty hain without import keye. hamari current application kesii na kesi process pr chal rahi hoti hai tu ye process osi ka reference hota hai. exit(number) ye ik function hai es se hamara process exit ho jaie ga
  }
};

// Export the connectDB function as the default export from this module
export default connectDB;

/*
process.exit(1) is a Node.js function that exits the current process.
The number passed to it indicates the exit status. 
A non-zero status (like 1) typically indicates an error.
Node.js provides the `process` object to interact with the current process.
This function is used here to stop the application if the database connectifails.
*/
