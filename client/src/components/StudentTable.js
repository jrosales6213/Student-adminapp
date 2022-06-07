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
import { cilPencil, cilDelete, cilNotes } from '@coreui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { updatePost } from '../redux/actions/posts'

function StudentRow({ post, currentId, setCurrentId, postData, setPostData, setVisible, visible }) {
  console.log(post)
  const dispatch = useDispatch()

  // const handleEdit = () => {
  //   setVisible(!visible)
  // }
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
                onClick={() => handleEdit(item._id)}
              ></CIcon>
            </CCol>
            <CCol>
              <CIcon icon={cilDelete} size={'lg'} className="me-2 pr-3 pl-3s"></CIcon>
            </CCol>
            <CCol>
              <CIcon icon={cilNotes} size={'lg'} className="me-2 pr-3 pl-3s"></CIcon>
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

export default StudentTable

StudentTable.propTypes = {
  setCurrentId: PropTypes.number,
  currentId: PropTypes.number,
  postData: PropTypes.object,
  setPostData: PropTypes.object,
  setVisible: PropTypes.bool,
  visible: PropTypes.bool,
}
StudentRow.propTypes = {
  post: PropTypes.object,
  currentId: PropTypes.number,
  setCurrentId: PropTypes.number,
  postData: PropTypes.object,
  setPostData: PropTypes.object,
  setVisible: PropTypes.bool,
  visible: PropTypes.bool,
}
