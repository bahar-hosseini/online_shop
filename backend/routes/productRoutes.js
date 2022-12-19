//External Modules
import express from 'express';
const router = express.Router();
import asyncHandler from 'express-async-handler';

//Internal Modules
import Product from '../models/productModel.js';

//* @describe: Fetch all products
//* @route: Get /api/products
//* @access Public route
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//* @describe: Fetch one specefic product
//* @route: Get /api/products/:id
//* @access: Public route
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    product ? res.json(product) : res.status(404);
    throw new Error(`Product Not Found`);
  })
);

export default router;
