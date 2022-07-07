import express from 'express';
import mongoose from 'mongoose';

import Partner from '../models/partner_model.js';

const router = express.Router();

export const getPartners = async (req, res) => {
    try {
        const allPartners = await Partner.find();
        res.status(200).json(allPartners);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getPartner = async (req, res) => {
    try {
        const findPartner = await Partner.find();
        res.status(200).json(findPartner);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const createPartner = async (req, res) => {
    const {company, manager, phone, address, city, state, comment} = req.body;
    const newPartner = new Partner ({company, manager, phone, address, city, state, comment});

    try {
      await newPartner.save(); 
      
      res.status(201).json(newPartner)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
export const updatePartner = async (req, res) => {
    const { id } = req.params;
    const { company, manager, phone, address, city, state, comment} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Partner with Id: ${id}`);

    const updatePartner = {company, manager, phone, address, city, state, comment, _id: id}

    await Partner.findByIdAndUpdate(id, updatePartner, { new: true})

    res.json(updatePartner)
}
export const deletePartner = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Partner with ID: ${id}`);

    await Partner.findByIdAndRemove(id);

    res.json({message: "Deleted Partner successfully."})
}

export default router;