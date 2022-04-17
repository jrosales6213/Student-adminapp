import mongoose from 'mongoose';
const {Schema} = mongoose;

const studentSchema = new Schema ({
    firstname: String,
    lastname: String,
    studentID: Number,
    address: String,  
    city: String,
    state: String,
    mobile: Number,
    email: String,
    jobsite: [String],
    createdAt: {
       type: Date,
       default: new Date(),
  },
})


var Student= mongoose.model('Student', studentSchema);

export default Student;