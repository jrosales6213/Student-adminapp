import React, { Suspense, useState, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudents } from '../redux/actions/students'
import { getPartners } from 'src/redux/actions/partners.js'
import { getEmployees } from 'src/redux/actions/employees'
import { getTasks } from 'src/redux/actions/tasks'
import { getBudgets } from 'src/redux/actions/budgets'
import { getPayrolls } from 'src/redux/actions/payrolls'
import { getEvents } from 'src/redux/actions/events'

import PropTypes from 'prop-types'

import StudentForm from './StudentForm.js'
import PartnerForm from './PartnerForm.js'
import EmployeeForm from './EmployeeForm.js'
import EventForm from './EventsForm'
import BudgetForm from './BudgetForm'

import routes from '../routes'
import Dashboard from 'src/views/dashboard/Dashboard.js'
import TaskForm from './TaskForm.js'

const AppContent = () => {
  const [currentId, setCurrentId] = useState(0)
  const [partnerId, setPartnerId] = useState(0)
  const [employeeId, setEmployeeId] = useState(0)
  const [taskId, setTaskId] = useState(0)
  const [eventId, setEventId] = useState(0)
  const [budgetId, setBudgetId] = useState(0)
  const [payrollId, setPayrollId] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStudents())
  }, [currentId, dispatch])
  useEffect(() => {
    dispatch(getPartners())
  }, [partnerId, dispatch])
  useEffect(() => {
    dispatch(getEmployees())
  }, [employeeId, dispatch])
  useEffect(() => {
    dispatch(getEvents())
  }, [eventId, dispatch])
  useEffect(() => {
    dispatch(getTasks())
  }, [taskId, dispatch])
  useEffect(() => {
    dispatch(getPayrolls())
  }, [payrollId, dispatch])
  useEffect(() => {
    dispatch(getBudgets())
  }, [budgetId, dispatch])

  const budgets = useSelector((state) => state.budgets)

  // const title = budgets.map((item) => item.title)
  // const amount = budgets.map((item) => item.amount)

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {/* {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })} */}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard budgets={budgets} />} />
          <Route
            path="/students"
            element={<StudentForm currentId={currentId} setCurrentId={setCurrentId} />}
          />
          <Route
            path="/partners"
            element={<PartnerForm partnerId={partnerId} setPartnerId={setPartnerId} />}
          />
          <Route
            path="/employees"
            element={<EmployeeForm employeeId={employeeId} setEmployeeId={setEmployeeId} />}
          />
          <Route path="/tasks" element={<TaskForm taskId={taskId} setTaskId={setTaskId} />} />
          <Route path="/events" element={<EventForm eventId={eventId} setEventId={setEventId} />} />
          <Route
            path="/budgets"
            element={
              <BudgetForm
                budgetId={budgetId}
                setBudgetId={setBudgetId}
                budgets={budgets}
                payrollId={payrollId}
                setPayrollId={setPayrollId}
              />
            }
          />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

// export default AppContent
Dashboard.propTypes = {
  budgets: PropTypes.any,
}

StudentForm.propTypes = {
  setCurrentId: PropTypes.any,
  currentId: PropTypes.any,
}
PartnerForm.propTypes = {
  setPartnerId: PropTypes.any,
  partnerId: PropTypes.any,
}
EmployeeForm.propTypes = {
  employeeId: PropTypes.any,
  setEmployeeId: PropTypes.any,
}
TaskForm.propTypes = {
  taskId: PropTypes.any,
  setTaskId: PropTypes.any,
}
EventForm.propTypes = {
  eventId: PropTypes.any,
  setEventId: PropTypes.any,
}
BudgetForm.propTypes = {
  budgetId: PropTypes.any,
  setBudgetId: PropTypes.any,
  budgets: PropTypes.any,
}
export default React.memo(AppContent)
