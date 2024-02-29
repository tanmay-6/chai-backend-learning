import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("MongoDB connection success! HOST : ", connectionInstance.connection.host);
    }
    catch {
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
}

export default connectDB;