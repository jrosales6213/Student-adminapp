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
import { cilPencil, cilDelete } from '@coreui/icons'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deletePost } from '../redux/actions/posts'
// import DeleteModal from './DeleteModal'

function StudentRow({ post, setCurrentId, setVisible, visible }) {
  const dispatch = useDispatch()

  function handleEdit(item) {
    setVisible(!visible)
    setCurrentId(item)
  }
  return (
    <>
      {post.map((item) => (
        <CTableRow key={item._id}>
          <CTableHeaderCell>{item.firstname}</CTableHeaderCell>
          <CTableDataCell>{item.lastname}</CTableDataCell>
          <CTableDataCell>{item.studentID}</CTableDataCell>
          <CTableDataCell className="d-flex justify-content-center">
            <CCol>
              <CIcon
                icon={cilPencil}
                size={'lg'}
                className="edit-button"
                type="submit"
                onClick={() => handleEdit(item._id)}
              ></CIcon>
            </CCol>
            <CCol>
              <CIcon
                icon={cilDelete}
                size={'lg'}
                className="delete-button"
                onClick={() => dispatch(deletePost(item._id))}
              ></CIcon>
            </CCol>
          </CTableDataCell>
        </CTableRow>
      ))}
    </>
  )
}

const StudentTable = ({ currentId, setCurrentId, postData, setPostData, setVisible, visible }) => {
  const posts = useSelector((state) => state.posts)
  return (
    <CRow>
      <CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Students</strong>
            </CCardHeader>
            <CCardBody>
              <CTable>
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
                    post={posts}
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
  // currentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // setCurrentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setCurrentId: PropTypes.any,
  currentId: PropTypes.any,
  postData: PropTypes.any,
  setPostData: PropTypes.any,
  setVisible: PropTypes.any,
  visible: PropTypes.any,
}
StudentRow.propTypes = {
  post: PropTypes.any,
  // currentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // setCurrentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setCurrentId: PropTypes.any,
  currentId: PropTypes.any,
  postData: PropTypes.any,
  setPostData: PropTypes.any,
  setVisible: PropTypes.any,
  visible: PropTypes.any,
}

export default StudentTable
