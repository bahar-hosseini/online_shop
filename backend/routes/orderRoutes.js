//External Modules
import express from 'express';
const router = express.Router();

//Internal Modules
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getUserOrders,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/userorders').get(protect, getUserOrders);
export default router;
