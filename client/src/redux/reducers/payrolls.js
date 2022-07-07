import { FETCH_PAYROLLS, CREATE_PAYROLL, UPDATE_PAYROLL, DELETE_PAYROLL } from '../actionTypes'

export default (payrolls = [], action) => {
  switch (action.type) {
    case FETCH_PAYROLLS:
      return action.payload
    case CREATE_PAYROLL:
      return [...payrolls, action.payload]
    case UPDATE_PAYROLL:
      return payrolls.map((payroll) =>
        payroll._id === action.payload._id ? action.payload : payroll,
      )
    case DELETE_PAYROLL:
      return payrolls.filter((payroll) => payroll._id !== action.payload)
    default:
      return payrolls
  }
}
