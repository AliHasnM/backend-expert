import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";

// Database Connection (try_catch and async_await)
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n Mongodb connected !! DB Host:${connectionInstance.connection.host}`);
        // connection and host check krne k leye
    } catch (error) {
        console.log("Mongodb connection failed.", error);
        process.exit(1);
        // process.exit(1) node js hamy access deta hai k hum process ho kahi b use kr sakty hain without import keye. hamari current application kesii na kesi process pr chal rahi hoti hai tu ye process osi ka reference hota hai. exit(number) ye ik function hai es se hamara process exit ho jaie ga
    }
}
// export file 
export default connectDB;