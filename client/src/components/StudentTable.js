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

import CIcon from '@coreui/icons-react'
import { cilPencil, cilDelete, cilNotes } from '@coreui/icons'
import { useSelector } from 'react-redux'

function StudentRow({ post }) {
  const handleclick = () => {
    console.log('you clikced a button')
  }
  return (
    <>
      {post.map((item) => (
        <CTableRow key={item._id}>
          <CTableHeaderCell>{item.firstname}</CTableHeaderCell>
          <CTableDataCell>{item.lastname}</CTableDataCell>
          <CTableDataCell>{item.mobile}</CTableDataCell>
          <CTableDataCell className="d-flex justify-content-center">
            <CCol>
              <CIcon
                icon={cilPencil}
                size={'lg'}
                className="me-2 pr-3 pl-3s"
                onClick={handleclick}
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

const StudentTable = () => {
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
                  <StudentRow post={posts} />
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
}
StudentRow.propTypes = {
  post: PropTypes.object,
}
