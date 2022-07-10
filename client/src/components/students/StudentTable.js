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
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import './StudentTable.css'

import CIcon from '@coreui/icons-react'
import { cilPencil, cilTrash } from '@coreui/icons'
import { useDispatch } from 'react-redux'
import { deleteStudent } from 'src/redux/actions/students'

function StudentRow({ student, setCurrentId, setVisible, visible }) {
  const dispatch = useDispatch()

  function handleEdit(item) {
    setVisible(!visible)
    setCurrentId(item)
  }
  return (
    <>
      {student.map((student) => (
        <CTableRow key={student._id}>
          <CTableDataCell>{student.firstname}</CTableDataCell>
          <CTableDataCell>{student.lastname}</CTableDataCell>
          <CTableDataCell>{student.studentID}</CTableDataCell>
          <CTableDataCell className="d-flex justify-content-center">
            <CCol>
              <CIcon
                icon={cilPencil}
                size={'lg'}
                className="edit-button"
                type="submit"
                onClick={() => handleEdit(student._id)}
              ></CIcon>
            </CCol>
            <CCol>
              <CIcon
                icon={cilTrash}
                size={'lg'}
                className="delete-button"
                onClick={() => dispatch(deleteStudent(student._id))}
              ></CIcon>
            </CCol>
          </CTableDataCell>
        </CTableRow>
      ))}
    </>
  )
}

const StudentTable = ({
  currentId,
  setCurrentId,
  postData,
  setPostData,
  setVisible,
  visible,
  students,
}) => {
  // const students = useSelector((state) => state.students)

  return (
    <CRow>
      <CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Students</strong>
            </CCardHeader>
            <CCardBody>
              <CTable hover responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Student ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <StudentRow
                    student={students}
                    currentId={currentId}
                    setCurrentId={setCurrentId}
                    postData={postData}
                    setPostData={setPostData}
                    setVisible={setVisible}
                    visible={visible}
                  />
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CCol>
    </CRow>
  )
}

StudentTable.propTypes = {
  student: PropTypes.any,
  setCurrentId: PropTypes.any,
  currentId: PropTypes.any,
  postData: PropTypes.any,
  setPostData: PropTypes.any,
  setVisible: PropTypes.any,
  visible: PropTypes.any,
  students: PropTypes.any,
}
StudentRow.propTypes = {
  student: PropTypes.any,
  setCurrentId: PropTypes.any,
  currentId: PropTypes.any,
  postData: PropTypes.any,
  setPostData: PropTypes.any,
  setVisible: PropTypes.any,
  visible: PropTypes.any,
}

export default StudentTable
