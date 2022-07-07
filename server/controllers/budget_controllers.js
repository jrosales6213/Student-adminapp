import express from 'express';
import mongoose from 'mongoose';
import Budget from '../models/budget_model.js';

const router = express.Router();

export const getBudgets = async (req, res) => {
    try {
        const getbudget = await Budget.find().sort({ _id: -1 }).limit(1);;
        res.status(200).json(getbudget);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getBudget = async (req, res) => {
    try {
        const findBudget = await Budget.find();
        res.status(200).json(findBudget);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const createBudget = async (req, res) => {
    const {title, amount } = req.body;
    const newBudget = new Budget ({ title, amount});

    try {
      await newBudget.save(); 
      
      res.status(201).json(newBudget)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
export const updateBudget = async (req, res) => {
    const { id } = req.params;
    const { title, amount } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No budget with Id: ${id}`);

    const updateBudget = { title, amount,  _id: id }

    await Budget.findByIdAndUpdate(id, updateBudget, { new: true})

    res.json(updateBudget)
}
export const deleteBudget = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No budget with ID: ${id}`);

    await Budget.findByIdAndRemove(id);

    res.json({message: "Deleted payroll successfully."})
}

// export const findBudget = async (res, req) => {
//     try {
//         const findBudget = await Budget.find().sort({ _id: -1 }).limit(3);
//         res.status(200).json(findBudget);
//     } catch (error) {
//         res.status(404).json({ message: error.message })
//     }
// }

export default router;