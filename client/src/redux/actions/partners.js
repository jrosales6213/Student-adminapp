import { FETCH_PARTNERS, CREATE_PARTNER, UPDATE_PARTNER, DELETE_PARTNER } from '../actionTypes'

import * as api from '../api/index'

export const getPartners = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPartners()

    dispatch({ type: FETCH_PARTNERS, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const createPartner = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPartner(post)

    dispatch({ type: CREATE_PARTNER, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const updatePartner = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePartner(id, post)

    dispatch({ type: UPDATE_PARTNER, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const deletePartner = (id) => async (dispatch) => {
  try {
    await api.deletePartner(id)

    dispatch({ type: DELETE_PARTNER, payload: id })
  } catch (error) {
    console.log(error.message)
  }
}
