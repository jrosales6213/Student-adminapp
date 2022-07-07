import { FETCH_BUDGETS, CREATE_BUDGET, UPDATE_BUDGET, DELETE_BUDGET } from '../actionTypes'

import * as api from '../api/index'

export const getBudgets = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBudgets()

    dispatch({ type: FETCH_BUDGETS, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const createBudget = (budget) => async (dispatch) => {
  try {
    const { data } = await api.createBudget(budget)

    dispatch({ type: CREATE_BUDGET, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const updateBudget = (id, budget) => async (dispatch) => {
  try {
    const { data } = await api.updateBudget(id, budget)

    dispatch({ type: UPDATE_BUDGET, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteBudget = (id) => async (dispatch) => {
  try {
    await api.deleteBudget(id)

    dispatch({ type: DELETE_BUDGET, payload: id })
  } catch (error) {
    console.log(error.message)
  }
}
