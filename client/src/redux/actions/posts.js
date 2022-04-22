import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../actionTypes'

import * as api from '../api/index'

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStudents()

    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createStudent(post)

    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent(id, post)

    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deleteStudent(id)

    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error.message)
  }
}
