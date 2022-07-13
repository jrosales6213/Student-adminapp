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
import './partner.css'

import CIcon from '@coreui/icons-react'
import { cilPencil, cilTrash } from '@coreui/icons'
import { useDispatch } from 'react-redux'
import { deletePartner } from 'src/redux/actions/partners'

function PartnerRow({ setPartnerId, setVisible, visible, partners }) {
  const dispatch = useDispatch()

  function handleEdit(item) {
    setVisible(!visible)
    setPartnerId(item)
  }
  return (
    <>
      {partners.map((partner) => (
        <CTableRow key={partner._id}>
          <CTableDataCell>{partner.company}</CTableDataCell>
          <CTableDataCell>{partner.manager}</CTableDataCell>
          <CTableDataCell>{partner.phone}</CTableDataCell>
          <CTableDataCell className="d-flex justify-content-center">
            <CCol>
              <CIcon
                icon={cilPencil}
                size={'lg'}
                className="edit-button"
                type="submit"
                onClick={() => handleEdit(partner._id)}
              ></CIcon>
            </CCol>
            <CCol>
              <CIcon
                icon={cilTrash}
                size={'lg'}
                className="delete-button"
                onClick={() => dispatch(deletePartner(partner._id))}
              ></CIcon>
            </CCol>
          </CTableDataCell>
        </CTableRow>
      ))}
    </>
  )
}

const PartnerTable = ({
  partnerId,
  setPartnerId,
  partnerData,
  setPartnerData,
  setVisible,
  visible,
  partners,
}) => {
  return (
    <CRow>
      <CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Business Partners</strong>
            </CCardHeader>
            <CCardBody>
              <CTable hover responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Company</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Manager</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phone #</CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <PartnerRow
                    partners={partners}
                    partnerId={partnerId}
                    setPartnerId={setPartnerId}
                    partnerData={partnerData}
                    setPartnerData={setPartnerData}
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

PartnerTable.propTypes = {
  setPartnerId: PropTypes.any,
  partnerId: PropTypes.any,
  partnerData: PropTypes.any,
  setPartnerData: PropTypes.any,
  setVisible: PropTypes.any,
  visible: PropTypes.any,
  partners: PropTypes.any,
}
PartnerRow.propTypes = {
  partners: PropTypes.any,
  setPartnerId: PropTypes.any,
  partnerId: PropTypes.any,
  partnerData: PropTypes.any,
  setPartnerData: PropTypes.any,
  setVisible: PropTypes.any,
  visible: PropTypes.any,
}

export default PartnerTable
