import axios from 'axios'

const url = 'http://localhost:5000'

export const fetchStudents = () => axios.get(`${url}/students`)
export const createStudent = (newStudent) => axios.post(`${url}/students`, newStudent)
export const updateStudent = (id, updatedStudent) =>
  axios.patch(`${url}/students/${id}`, updatedStudent)
export const deleteStudent = (id) => axios.delete(`${url}/students/${id}`)

export const fetchPartners = () => axios.get(`${url}/partners`)
export const createPartner = (newPartner) => axios.post(`${url}/partners`, newPartner)
export const updatePartner = (id, updatedPartner) =>
  axios.patch(`${url}/partners/${id}`, updatedPartner)
export const deletePartner = (id) => axios.delete(`${url}/partners/${id}`)

export const fetchEmployees = () => axios.get(`${url}/employees`)
export const createEmployee = (newEmployee) => axios.post(`${url}/employees`, newEmployee)
export const updateEmployee = (id, updatedEmployee) =>
  axios.patch(`${url}/employees/${id}`, updatedEmployee)
export const deleteEmployee = (id) => axios.delete(`${url}/employees/${id}`)
