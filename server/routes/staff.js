import express from 'express';
import { getAllStaff, getStaff, createStaff, updateStaff, deleteStaff } from '../controllers/staff_controllers.js';

const router = express.Router();

router.get('/', getAllStaff);
router.post('/', createStaff);
router.get('/:id', getStaff);
router.patch('/:id', updateStaff);
router.delete('/:id', deleteStaff);

export default router;