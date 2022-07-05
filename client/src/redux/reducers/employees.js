import { FETCH_EMPLOYEES, CREATE_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from '../actionTypes'

export default (employees = [], action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return action.payload
    case CREATE_EMPLOYEE:
      return [...employees, action.payload]
    case UPDATE_EMPLOYEE:
      return employees.map((employee) =>
        employee._id === action.payload._id ? action.payload : employee,
      )
    case DELETE_EMPLOYEE:
      return employees.filter((employee) => employee._id !== action.payload)
    default:
      return employees
  }
}
