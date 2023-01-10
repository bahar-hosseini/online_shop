//External Modules
import express from 'express';
const router = express.Router();

//Internal Modules
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController.js';

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(getUserProfile);

export default router;
