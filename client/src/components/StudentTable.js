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

const StudentRow = ({ posts }) => {
  return (
    <CTableRow>
      <CTableHeaderCell scope="row">{posts.firstname}</CTableHeaderCell>

      <CTableDataCell>{posts.lastname}</CTableDataCell>
      <CTableDataCell>{posts.mobile}</CTableDataCell>

      <CTableDataCell className="d-flex justify-content-center">
        <CCol>
          <CIcon icon={cilPencil} size={'lg'} className="me-2 pr-3 pl-3s"></CIcon>
        </CCol>
        <CCol>
          <CIcon icon={cilDelete} size={'lg'} className="me-2 pr-3 pl-3s"></CIcon>
        </CCol>
        <CCol>
          <CIcon icon={cilNotes} size={'lg'} className="me-2 pr-3 pl-3s"></CIcon>
        </CCol>
      </CTableDataCell>
    </CTableRow>
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
              {/* <DocsExample href="components/table#variants"> */}
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
                  <StudentRow posts={posts} />
                  {/* <CTableRow>
                    <CTableHeaderCell scope="row">{posts.firstname}</CTableHeaderCell>
                    <CTableDataCell>{posts.lastname}</CTableDataCell>
                    <CTableDataCell>143543</CTableDataCell>
                    <CTableDataCell className="d-flex justify-content-center">
                      <CCol>
                        <CIcon icon={cilPencil} size={'lg'} className="me-2 pr-3 pl-3s"></CIcon>
                      </CCol>
                      <CCol>
                        <CIcon icon={cilDelete} size={'lg'} className="me-2 pr-3 pl-3s"></CIcon>
                      </CCol>
                      <CCol>
                        <CIcon icon={cilNotes} size={'lg'} className="me-2 pr-3 pl-3s"></CIcon>
                      </CCol>
                    </CTableDataCell>
                  </CTableRow> */}

                  {/* <CTableRow color="primary">
                    <CTableHeaderCell scope="row">Primary</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="secondary">
                    <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="success">
                    <CTableHeaderCell scope="row">Success</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="danger">
                    <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="warning">
                    <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="info">
                    <CTableHeaderCell scope="row">Info</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="light">
                    <CTableHeaderCell scope="row">Light</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="dark">
                    <CTableHeaderCell scope="row">Dark</CTableHeaderCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow> */}
                </CTableBody>
              </CTable>
              {/* </DocsExample> */}
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
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  mobile: PropTypes.string,
  posts: PropTypes.object,
}
