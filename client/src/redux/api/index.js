import axios from 'axios'

const url = 'http://localhost:5000/students'

export const fetchStudents = () => axios.get(url)
export const createStudent = (newPost) => axios.post(url, newPost)
export const updateStudent = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deleteStudent = (id) => axios.delete(`${url}/${id}`)
