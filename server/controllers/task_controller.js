import express from 'express';
import mongoose from 'mongoose';

import Task from '../models/task_model.js';

const router = express.Router();

export const getTasks = async (req, res) => {
    try {
        const allTasks = await Task.find();
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getTask = async (req, res) => {
    try {
        const findTask = await Task.find();
        res.status(200).json(findTask);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const createTask = async (req, res) => {
    const { task, expectedby } = req.body;
    const newTask = new Task ({ task, expectedby});

    try {
      await newTask.save(); 
      
      res.status(201).json(newTask)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { task, expectedby} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Task with Id: ${id}`);

    const updateTask = { task, expectedby, _id: id }

    await Task.findByIdAndUpdate(id, updateTask, { new: true})

    res.json(updateTask)
}
export const deleteTask = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No task with ID: ${id}`);

    await Task.findByIdAndRemove(id);

    res.json({message: "Deleted task successfully."})
}

export default router;