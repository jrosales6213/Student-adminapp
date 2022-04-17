import express from 'express';
import { getEvents, createEvent, getEvent, updateEvent, deleteEvent} from '../controllers/event_controller.js';

const router = express.Router();

router.get('/', getEvents);
router.post('/', createEvent);
router.get('/:id', getEvent);
router.patch('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;