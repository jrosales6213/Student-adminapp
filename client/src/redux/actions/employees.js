import { FETCH_EMPLOYEES, CREATE_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from '../actionTypes'

import * as api from '../api/index'

export const getEmployees = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEmployees()

    dispatch({ type: FETCH_EMPLOYEES, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const createEmployee = (employee) => async (dispatch) => {
  try {
    const { data } = await api.createEmployee(employee)

    dispatch({ type: CREATE_EMPLOYEE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const updateEmployee = (id, employee) => async (dispatch) => {
  try {
    const { data } = await api.updateEmployee(id, employee)

    dispatch({ type: UPDATE_EMPLOYEE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await api.deleteEmployee(id)

    dispatch({ type: DELETE_EMPLOYEE, payload: id })
  } catch (error) {
    console.log(error.message)
  }
}
