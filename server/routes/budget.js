import express from 'express';
import { getBudgets, getBudget, createBudget, updateBudget, deleteBudget} from '../controllers/budget_controllers.js';

const router = express.Router();

router.get('/', getBudgets);
router.post('/', createBudget);
router.get('/:id', getBudget);
router.patch('/:id', updateBudget);
router.delete('/:id', deleteBudget);

export default router;