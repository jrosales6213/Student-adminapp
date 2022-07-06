import express from 'express';
import { getPayrolls, getPayroll, createPayroll, updatePayroll, deletePayroll} from '../controllers/payroll_controller.js';

const router = express.Router();

router.get('/', getPayrolls);
router.post('/', createPayroll);
router.get('/:id', getPayroll);
router.patch('/:id', updatePayroll);
router.delete('/:id', deletePayroll);

export default router;