//External Modules
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

//Internal Modules
import products from './data/products.js';
import connectDB from './config/db.js';
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
