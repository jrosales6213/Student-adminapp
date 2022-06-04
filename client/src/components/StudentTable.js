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

function StudentRow({ post, currentId, setCurrentId, postData, setPostData }) {
  console.log(post)
  const dispatch = useDispatch()

  // const handleEdit = () => {
  //   // dispatch(updatePost(currentId, setPostData))
  //   console.log(post._id)
  // }
  // const editForm = () => {

  //   setPostData({
  //     firstname: ,
  //     lastname: ,
  //     studentId: '',
  //     address: '',
  //     city: '',
  //     state: '',
  //     mobile: '',
  //     email: '',
  //     // jobsite: '',
  //   })
  // }
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
                // onClick={() => console.log(item._id)}
                // onClick={() => setCurrentId(item._id)}
                onClick={() => scrollIntoView(alignToTop)}
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

const StudentTable = ({ currentId, setCurrentId, postData, setPostData }) => {
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
}
StudentRow.propTypes = {
  post: PropTypes.object,
  currentId: PropTypes.number,
  setCurrentId: PropTypes.number,
  postData: PropTypes.object,
  setPostData: PropTypes.object,
}
