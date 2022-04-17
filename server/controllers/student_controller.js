import express from 'express';
import mongoose from 'mongoose';
import Student from '../models/student_model.js';


const router = express.Router();


export const getStudents = async (req, res) => { 
    try {
        const allStudents = await Student.find();         
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getStudent = async (req, res) => { 
    const { id } = req.params;

    try {
        const findStudent = await Student.findById(id);  
        
        res.status(200).json(findStudent);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createStudent = async (req, res) => {
    const { firstname, lastname, studentID, address, city, mobile, email, jobsite} = req.body;

    const newStudent = new Student({ firstname, lastname, studentID, address, city, mobile, email, jobsite }) 

    try {
        await newStudent.save();

        res.status(201).json(newStudent );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, studentID, address, city, mobile, email, jobsite } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student with id: ${id}`);

    const updatedStudent = { firstname, lastname, studentID, address, city, mobile, email, jobsite , _id: id };

    await Student.findByIdAndUpdate(id, updatedStudent, { new: true }); 

    res.json(updatedStudent);
}

export const deleteStudent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student with id: ${id}`);

    await Student.findByIdAndRemove(id); 

    res.json({ message: "deleted student successfully." });
}



export default router;