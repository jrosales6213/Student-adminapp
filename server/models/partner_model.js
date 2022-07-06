import mongoose from "mongoose";
const {Schema} = mongoose;

const partnerSchema = new Schema({
    company: String,
    manager: String,
    phone: Number,
    address: String, 
    city: String, 
    state: String, 
    comment: String,
    createdAt: {
        type: Date,
        default: new Date(),
   }
})

const Partner = mongoose.model('JobSite', partnerSchema)

export default Partner;