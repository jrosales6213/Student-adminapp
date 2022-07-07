import mongoose from 'mongoose';
const {Schema} = mongoose;

const payrollSchema = new Schema ({
    pay_period: String,
    amount: Number,
    createdAt: {
       type: Date,
       default: new Date(),
  },
})


var Payroll= mongoose.model('Payroll', payrollSchema);

export default Payroll;