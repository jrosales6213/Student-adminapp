import mongoose from 'mongoose';
const {Schema} = mongoose;

const staffSchema = new Schema ({
    firstname: String,
    lastname: String,
    title: String,
    selectedFile: String,
    createdAt: {
       type: Date,
       default: new Date(),
  },
})


var Staff= mongoose.model('Staff', staffSchema);

export default Staff;