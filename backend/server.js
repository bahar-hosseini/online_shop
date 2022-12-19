//External Modules
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

//Internal Modules
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.use('/api/products', productRoutes);

// Define error-handling middleware functions
//* Not Found

app.use(notFound);

// Define error-handling middleware functions
//* Getting any error

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
