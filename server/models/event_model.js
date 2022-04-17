import mongoose from "mongoose";
const {Schema} = mongoose;

const eventSchema = new Schema({
    event: String,
    date: Date,
    details: String,
    createdAt: {
        type: Date,
        default: new Date(),
   }
})

const Event = mongoose.model('Event', eventSchema)

export default Event;