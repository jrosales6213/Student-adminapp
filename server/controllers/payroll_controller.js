import express from 'express';
import mongoose from 'mongoose';

import Payroll from '../models/budget_model.js';

const router = express.Router();

export const getPayrolls = async (req, res) => {
    try {
        const getPayroll = await Event.find();
        res.status(200).json(getPayroll);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getPayroll = async (req, res) => {
    try {
        const findPayroll = await Payroll.find();
        res.status(200).json(findPayroll);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const createPayroll = async (req, res) => {
    const { pay_period, amount } = req.body;
    const newPayroll = new Payroll ({ pay_period , amount});

    try {
      await newPayroll.save(); 
      
      res.status(201).json(newPayroll)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
export const updatePayroll = async (req, res) => {
    const { id } = req.params;
    const { pay_period, amount } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Event with Id: ${id}`);

    const updatePayroll = { pay_period, amount,  _id: id }

    await Payroll.findByIdAndUpdate(id, updatePayroll, { new: true})

    res.json(updatePayroll)
}
export const deletePayroll = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No payroll with ID: ${id}`);

    await Payroll.findByIdAndRemove(id);

    res.json({message: "Deleted payroll successfully."})
}

export default router;