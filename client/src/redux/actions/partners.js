import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../actionTypes'

import * as api from '../api/index'

export const getPartners = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPartners()

    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const createPartner = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPartner(post)

    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const updatePartner = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePartner(id, post)

    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const deletePartner = (id) => async (dispatch) => {
  try {
    await api.deletePartner(id)

    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error.message)
  }
}
