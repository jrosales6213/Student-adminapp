import express from 'express';
import mongoose from 'mongoose';
import Staff from '../models/staff_model.js';


const router = express.Router();


export const getAllStaff = async (req, res) => { 
    try {
        const allStaff = await Staff.find();         
        res.status(200).json(allStaff);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getStaff = async (req, res) => { 
    const { id } = req.params;

    try {
        const findStaff = await Staff.findById(id);  
        
        res.status(200).json(findStaff);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createStaff = async (req, res) => {
    const { firstname, lastname, title, selectedfile } = req.body;

    const newStaff = new Staff({ firstname, lastname, title, selectedfile }) 

    try {
        await newStaff.save();

        res.status(201).json(newStaff);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateStaff = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, title, selectedfile} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No staff with id: ${id}`);

    const updatedStaff = { firstname, lastname, title, selectedfile , _id: id };

    await Staff.findByIdAndUpdate(id, updatedStaff, { new: true }); 

    res.json(updatedStaff);
}

export const deleteStaff = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No staff with id: ${id}`);

    await Staff.findByIdAndRemove(id); 

    res.json({ message: "deleted staff successfully." });
}



export default router;