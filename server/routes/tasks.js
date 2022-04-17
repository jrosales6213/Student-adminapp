import express from 'express';
import { getTask, createTask, getTasks, updateTask, deleteTask } from '../controllers/task_controller.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;