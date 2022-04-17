import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './routes/students.js';
import partnerRoutes from './routes/partners.js';
import taskRoutes from './routes/tasks.js';
import eventRoutes from './routes/events.js';
import staffRoutes from './routes/staff.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/students', studentRoutes);
app.use('/partners', partnerRoutes);
app.use('/tasks', taskRoutes);
app.use('/events', eventRoutes);
app.use('/staff', staffRoutes);

const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));




