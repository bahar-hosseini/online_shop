import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to db ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};
export default connectDB;
