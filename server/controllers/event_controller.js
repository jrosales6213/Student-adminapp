import express from 'express';
import mongoose from 'mongoose';

import Event from '../models/event_model.js';

const router = express.Router();

export const getEvents = async (req, res) => {
    try {
        const allEvents = await Event.find();
        res.status(200).json(allEvents);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getEvent = async (req, res) => {
    try {
        const findEvent = await Event.find();
        res.status(200).json(findEvent);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const createEvent = async (req, res) => {
    const { event, date , details } = req.body;
    const newEvent = new Event ({ event, date, details });

    try {
      await newEvent.save(); 
      
      res.status(201).json(newEvent)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
export const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { event, date, details } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Event with Id: ${id}`);

    const updateEvent = { event, date, details, _id: id }

    await Event.findByIdAndUpdate(id, updateEvent, { new: true})

    res.json(updateEvent)
}
export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with ID: ${id}`);

    await Event.findByIdAndRemove(id);

    res.json({message: "Deleted event successfully."})
}

export default router;