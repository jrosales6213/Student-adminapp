import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updateTask, createTask } from 'src/redux/actions/tasks.js'
// import FileBase from 'react-file-base64';

import {
  CButton,
  CForm,
  CFormInput,
  CRow,
  CCard,
  CCardBody,
  CCardHeader,
  CInputGroup,
} from '@coreui/react'
import TaskTable from './TaskTable'

const TaskForm = ({ taskId, setTaskId }) => {
  const [taskData, setTaskData] = useState({
    task: PropTypes.string,
    expectedby: PropTypes.any,
  })

  const dispatch = useDispatch()

  const newTask = useSelector((state) =>
    taskId ? state.tasks.find((task) => task._id === taskId) : null,
  )

  useEffect(() => {
    if (newTask) setTaskData(newTask)
  }, [newTask])

  const clear = () => {
    setTaskId(0)
    setTaskData({
      task: '',
      expectedby: '',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (taskId === 0) {
      dispatch(createTask(taskData))
      clear()
    } else {
      dispatch(updateTask(taskId, taskData))
      clear()
      console.log('CurrentId already exists')
    }
  }
  return (
    <>
      <CCard>
        <CCardHeader>Tasks</CCardHeader>
        <CCardBody>
          <CRow>
            <CForm onSubmit={handleSubmit}>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="To-Do-Item"
                  type="text"
                  id="task"
                  value={taskData.task}
                  onChange={(e) => setTaskData({ ...taskData, task: e.target.value })}
                  required
                />
                <CFormInput
                  placeholder="Due Date"
                  type="date"
                  id="date"
                  value={taskData.expectedby}
                  onChange={(e) => setTaskData({ ...taskData, expectedby: e.target.value })}
                  required
                />
                <CButton type="submit" color="primary" id="button-addon2">
                  +
                </CButton>
              </CInputGroup>
            </CForm>
          </CRow>
        </CCardBody>
      </CCard>
      <TaskTable
        taskData={taskId}
        setTaskData={setTaskData}
        taskId={taskId}
        setTaskId={setTaskId}
      />
    </>
  )
}

TaskForm.propTypes = {
  setTaskId: PropTypes.any,
  taskId: PropTypes.any,
}
TaskTable.prototype = {
  setTaskId: PropTypes.any,
  taskId: PropTypes.any,
  taskData: PropTypes.any,
  setTaskData: PropTypes.any,
}

export default TaskForm
