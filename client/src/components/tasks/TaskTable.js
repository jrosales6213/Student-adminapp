import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteTask } from 'src/redux/actions/tasks'

import {
  CCol,
  CRow,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilCheck, cilTrash } from '@coreui/icons'

function TaskRow({ tasks, setTaskId }) {
  const dispatch = useDispatch()

  return (
    <>
      {tasks.map((task) => (
        <CTableRow key={task._id}>
          <CTableDataCell>
            {task.task.charAt(0).toUpperCase() + task.task.substring(1)}
          </CTableDataCell>
          <CTableDataCell> {new Date(task.expectedby).toLocaleDateString()}</CTableDataCell>
          <CTableDataCell className="d-flex justify-content-center">
            <CCol>
              <CIcon
                icon={cilCheck}
                size={'lg'}
                className="edit-button"
                onClick={() => setTaskId(task._id)}
              ></CIcon>
            </CCol>

            {/* Will need to add completed functionality in the future */}

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
    </>
  )
}

const TaskTable = ({ taskId, setTaskId, taskData, setTaskData, tasks }) => {
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
                <CTable hover responsive>
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
