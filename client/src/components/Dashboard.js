import React from 'react'
import PropTypes from 'prop-types'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { useSelector } from 'react-redux'
import WidgetsDropdown from './WidgetsDropdown'

const Dashboard = ({ budgets }) => {
  const tasks = useSelector((state) => state.tasks)
  const events = useSelector((state) => state.events)
  const payrolls = useSelector((state) => state.payrolls)

  return (
    <>
      <WidgetsDropdown budgets={budgets} />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Budget Spent
              </h4>
              <div className="small text-medium-emphasis">2021-2022 School Year</div>
            </CCol>
          </CRow>
          <CChartLine
            data={{
              labels: payrolls.map((payroll) => payroll.pay_period),
              datasets: [
                {
                  label: 'Amount Spent',
                  backgroundColor: 'rgba(151, 187, 205, 0.2)',
                  borderColor: 'rgba(151, 187, 205, 1)',
                  pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                  pointBorderColor: '#fff',
                  data: payrolls.map((payroll) => payroll.amount),
                },
              ],
            }}
          />
        </CCardBody>
      </CCard>

      <CRow>
        <CCol sm={6}>
          <CCard className="mb-4">
            <CCardHeader>Events</CCardHeader>
            <CCardBody>
              <CRow>
                <CTable align="middle" className="mb-0 border" hover responsive>
                  <CTableHead color="light">
                    <CTableRow>
                      <CTableHeaderCell className="text-center">Date</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Event</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>

                  <CTableBody>
                    {events.map((event) => (
                      <CTableRow key={event._id}>
                        <CTableHeaderCell className="text-center">
                          {new Date(event.date).toLocaleDateString()}
                        </CTableHeaderCell>
                        <CTableHeaderCell className="text-center">
                          {event.event.charAt(0).toUpperCase() + event.event.substring(1)}
                        </CTableHeaderCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm={6}>
          <CCard>
            <CCardHeader className="success">Tasks</CCardHeader>
            <CCardBody>
              <CRow>
                <CTable align="middle" className="mb-0 border" hover responsive>
                  <CTableHead color="light">
                    <CTableRow>
                      <CTableHeaderCell className="text-center">Task</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Due Date</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {tasks.map((task) => (
                      <CTableRow key={task._id}>
                        <CTableHeaderCell>
                          {task.task.charAt(0).toUpperCase() + task.task.substring(1)}
                        </CTableHeaderCell>

                        <CTableHeaderCell className="text-center">
                          {new Date(task.expectedby).toLocaleDateString()}
                        </CTableHeaderCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

Dashboard.propTypes = {
  budgets: PropTypes.any,
}

WidgetsDropdown.propTypes = {
  budgets: PropTypes.any,
}

export default Dashboard
