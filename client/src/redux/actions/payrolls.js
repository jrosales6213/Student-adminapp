import { FETCH_PAYROLLS, CREATE_PAYROLL, UPDATE_PAYROLL, DELETE_PAYROLL } from '../actionTypes'

import * as api from '../api/index'

export const getPayrolls = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPayrolls()

    dispatch({ type: FETCH_PAYROLLS, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const createPayroll = (payroll) => async (dispatch) => {
  try {
    const { data } = await api.createPayroll(payroll)

    dispatch({ type: CREATE_PAYROLL, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const updatePayroll = (id, payroll) => async (dispatch) => {
  try {
    const { data } = await api.updatePayroll(id, payroll)

    dispatch({ type: UPDATE_PAYROLL, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const deletePayroll = (id) => async (dispatch) => {
  try {
    await api.deletePayroll(id)

    dispatch({ type: DELETE_PAYROLL, payload: id })
  } catch (error) {
    console.log(error.message)
  }
}
