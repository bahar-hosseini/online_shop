//External Modules
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//Internal Modules
import users from './data/users.js';
import products from './data/products.js';
import User from './models/usersModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;

    const productsSample = products.map((p) => {
      return { ...p, user: adminUser };
    });

    await Product.insertMany(productsSample);
    console.log('Data imported successfully');
    process.exit();
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

// create flag to reset database
process.argv[2] === '-d' ? destroyData() : importData();
