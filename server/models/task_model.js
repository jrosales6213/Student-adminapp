import mongoose from 'mongoose';
const {Schema} = mongoose;

const taskSchema = new Schema ({
    task: String,
    expectedby: Date, 
    createdAt: {
       type: Date,
       default: new Date(),
  },
})


var Task= mongoose.model('Task', taskSchema);

export default Task;