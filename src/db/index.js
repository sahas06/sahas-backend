import mongoose from "mongoose";
import { Db_name } from "../constants.js";

// Correctly reference the environment variable using backticks
const connectDb = async () => {
    try {
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${Db_name}`);
        console.log(`\n Mongodb connected!! db host: ${connectioninstance.connection.host}`);
    } catch (error) {
        console.log('Mongodb connection failed:', error);
        process.exit(1);
    }
}

export default connectDb;
