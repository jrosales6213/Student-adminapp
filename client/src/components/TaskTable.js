import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updateTask, deleteTask } from '../redux/actions/tasks'
// import FileBase from 'react-file-base64';
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CRow,
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CInputGroup,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilPencil, cilDelete, cilCheck, cilXCircle, cilTrash } from '@coreui/icons'
// import { updateTask, deleteTask } from 'src/redux/api'
// import StudentTable from './StudentTable'
function TaskRow({ tasks, taskId, setTaskId, taskData, setTaskData }) {
  const [completed, setCompleted] = useState(true)

  const handleComplete = (e) => {
    e.preventDefault()
    setCompleted(!false)
  }
  const dispatch = useDispatch()

  return (
    <>
      {tasks.map((task) => (
        <CTableRow key={task._id}>
          <CTableDataCell>{task.task}</CTableDataCell>
          <CTableDataCell>{task.expectedby}</CTableDataCell>
          <CTableDataCell className="d-flex justify-content-center">
            <CCol>
              {/* {completed ? (
                <CIcon
                  icon={cilCheck}
                  size={'lg'}
                  className="edit-button"
                  onClick={() => setCompleted(!completed)}
                ></CIcon>
              ) : (
                <CIcon
                  icon={cilTrash}
                  size={'lg'}
                  className="edit-button"
                  onClick={() => setCompleted(!completed)}
                ></CIcon>
              )} */}
              {/* {!completed && (
                <>
                  <CIcon
                    icon={cilCheck}
                    size={'lg'}
                    className="edit-button"
                    onClick={() => setCompleted(!completed)}
                  ></CIcon>
                  <span>complete</span>
                </>
              )}
              {completed && (
                <>
                  <CIcon
                    icon={cilCheck}
                    size={'lg'}
                    className="edit-button"
                    onClick={() => setCompleted(!completed)}
                  ></CIcon>
                  <span>pending</span>
                </>
              )} */}

              {/* <CIcon
                icon={cilCheck}
                size={'lg'}
                className="edit-button"
                onClick={() => setTaskId(task._id)}
              ></CIcon>
              <span>complete</span> */}
            </CCol>
            <CCol>
              <CIcon
                icon={cilTrash}
                size={'lg'}
                className="delete-button"
                onClick={() => dispatch(deleteTask(task._id))}
              ></CIcon>
            </CCol>
          </CTableDataCell>
        </CTableRow>
      ))}

      {/* <CTableRow>
        <CTableDataCell>Take out trash</CTableDataCell>
        <CTableDataCell>Today</CTableDataCell>
        <CTableDataCell className="d-flex justify-content-center">
          <CCol>
            <CIcon icon={cilCheck} size={'lg'} className="edit-button" type="submit"></CIcon>
          </CCol>
          <CCol>
            <CIcon icon={cilTrash} size={'lg'} className="delete-button"></CIcon>
          </CCol>
        </CTableDataCell>
      </CTableRow> */}
    </>
  )
}

const TaskTable = ({ taskId, setTaskId, taskData, setTaskData }) => {
  const tasks = useSelector((state) => state.tasks)
  return (
    <>
      <CRow className="mt-4">
        <CCol>
          <CCol xs={12}>
            <CCard className="mb-2">
              <CCardHeader>
                <strong>To Do List</strong>
              </CCardHeader>
              <CCardBody>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Task</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Due By</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <TaskRow
                      tasks={tasks}
                      taskId={taskId}
                      setTaskId={setTaskId}
                      taskData={taskData}
                      setTaskData={setTaskData}
                    />
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CCol>
      </CRow>
    </>
  )
}

TaskTable.propTypes = {
  tasks: PropTypes.any,
  taskId: PropTypes.any,
  setTaskId: PropTypes.any,
  taskData: PropTypes.any,
  setTaskData: PropTypes.any,
}
TaskRow.propTypes = {
  tasks: PropTypes.any,
  taskId: PropTypes.any,
  setTaskId: PropTypes.any,
  taskData: PropTypes.any,
  setTaskData: PropTypes.any,
}
export default TaskTable
