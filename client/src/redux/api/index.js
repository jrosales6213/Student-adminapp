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

export const fetchTasks = () => axios.get(`${url}/tasks`)
export const createTask = (newTask) => axios.post(`${url}/tasks`, newTask)
export const updateTask = (id, updatedTask) => axios.patch(`${url}/tasks/${id}`, updatedTask)
export const deleteTask = (id) => axios.delete(`${url}/tasks/${id}`)

export const fetchEvents = () => axios.get(`${url}/events`)
export const createEvent = (newEvent) => axios.post(`${url}/events`, newEvent)
export const updateEvent = (id, updatedEvent) => axios.patch(`${url}/events/${id}`, updatedEvent)
export const deleteEvent = (id) => axios.delete(`${url}/events/${id}`)

export const fetchBudgets = () => axios.get(`${url}/budgets`)
export const createBudget = (newBudget) => axios.post(`${url}/budgets`, newBudget)
export const updateBudget = (id, updatedBudget) =>
  axios.patch(`${url}/budgets/${id}`, updatedBudget)
export const deleteBudget = (id) => axios.delete(`${url}/budgets/${id}`)

export const fetchPayrolls = () => axios.get(`${url}/payrolls`)
export const createPayroll = (newPayroll) => axios.post(`${url}/payrolls`, newPayroll)
export const updatePayroll = (id, updatedPayroll) =>
  axios.patch(`${url}/payrolls/${id}`, updatedPayroll)
export const deletePayroll = (id) => axios.delete(`${url}/payrolls/${id}`)
