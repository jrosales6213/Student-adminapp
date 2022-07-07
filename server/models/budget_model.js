import mongoose from 'mongoose';
const {Schema} = mongoose;

const budgetSchema = new Schema ({
    title: String,
    amount: Number,
    createdAt: {
       type: Date,
       default: new Date(),
  },
})


var Budget= mongoose.model('Budget', budgetSchema);

export default Budget;