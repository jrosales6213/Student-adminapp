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
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deletePartner } from '../redux/actions/partners'
// import DeleteModal from './DeleteModal'

function PartnerRow({ post, setPartnerId, setVisible, visible }) {
  const dispatch = useDispatch()

  function handleEdit(item) {
    setVisible(!visible)
    setPartnerId(item)
  }
  return (
    <>
      {post.map((item) => (
        <CTableRow key={item._id}>
          <CTableDataCell>{item.company}</CTableDataCell>
          <CTableDataCell>{item.manager}</CTableDataCell>
          <CTableDataCell>{item.phone}</CTableDataCell>
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
                icon={cilTrash}
                size={'lg'}
                className="delete-button"
                onClick={() => dispatch(deletePartner(item._id))}
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
}) => {
  const posts = useSelector((state) => state.partners)
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
                    post={posts}
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
  // currentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // setCurrentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setPartnerId: PropTypes.any,
  partnerId: PropTypes.any,
  partnerData: PropTypes.any,
  setPartnerData: PropTypes.any,
  setVisible: PropTypes.any,
  visible: PropTypes.any,
}
PartnerRow.propTypes = {
  post: PropTypes.any,
  // currentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // setCurrentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setPartnerId: PropTypes.any,
  partnerId: PropTypes.any,
  partnerData: PropTypes.any,
  setPartnerData: PropTypes.any,
  setVisible: PropTypes.any,
  visible: PropTypes.any,
}

export default PartnerTable
