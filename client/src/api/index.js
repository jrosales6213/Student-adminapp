import axios from 'axios'

const url = 'http://localhost:5000/'

export const fetchStudents = () => axios.get(`${url}/students`)
export const createStudent = (newPost) => axios.post(`${url}/students`, newPost)
export const updateStudent = (id, updatedPost) => axios.patch(`${url}/students/${id}`, updatedPost)
export const deleteStudent = (id) => axios.delete(`${url}/students/${id}`)

export const fetchPartners = () => axios.get(`${url}/partners`)
export const createPartner = (newPost) => axios.post(`${url}/partners`, newPost)
export const updatePartner = (id, updatedPost) => axios.patch(`${url}/partners/${id}`, updatedPost)
export const deletePartner = (id) => axios.delete(`${url}/partners/${id}`)
