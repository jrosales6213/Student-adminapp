import express from 'express';
import { getPartners, getPartner, createPartner, updatePartner, deletePartner} from '../controllers/partner_controller.js';

const router = express.Router();

router.get('/', getPartners);
router.post('/', createPartner);
router.get('/:id', getPartner);
router.patch('/:id', updatePartner);
router.delete('/:id', deletePartner);

export default router;