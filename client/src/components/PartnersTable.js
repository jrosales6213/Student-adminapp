import React from 'react'
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
import { cilPencil, cilDelete, cilNotes, cilCut } from '@coreui/icons'

const PartnerTable = () => {
  return (
    <CRow>
      <CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Partners</strong>
            </CCardHeader>
            <CCardBody>
              {/* <DocsExample href="components/table#variants"> */}
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Company</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Manager</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">Walgreens</CTableHeaderCell>
                    <CTableDataCell>Jesus Rosales</CTableDataCell>
                    <CTableDataCell>951-234-3456</CTableDataCell>
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
                  <CTableRow>
                    <CTableHeaderCell scope="row">Walgreens</CTableHeaderCell>
                    <CTableDataCell>Jesus Rosales</CTableDataCell>
                    <CTableDataCell>951-234-3456</CTableDataCell>
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
                  <CTableRow>
                    <CTableHeaderCell scope="row">Walgreens</CTableHeaderCell>
                    <CTableDataCell>Jesus Rosales</CTableDataCell>
                    <CTableDataCell>951-234-3456</CTableDataCell>
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
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CCol>
    </CRow>
  )
}

export default PartnerTable
