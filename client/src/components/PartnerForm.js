import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getPartners, createPartner, updatePartner } from '../redux/actions/partners'
// import FileBase from 'react-file-base64';
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import PartnerTable from './PartnerTable'

const PartnerForm = ({ partnerId, setPartnerId }) => {
  const [visible, setVisible] = useState(false)
  const [partnerData, setPartnerData] = useState({
    company: PropTypes.string,
    manager: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    comment: PropTypes.string,
  })

  const datapartners = useSelector((state) =>
    partnerId ? state.partners.find((message) => message._id === partnerId) : null,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPartners())
  }, [partnerId, dispatch])

  useEffect(() => {
    if (datapartners) setPartnerData(datapartners)
  }, [datapartners])

  const clear = () => {
    setPartnerId(0)
    setPartnerData({
      company: '',
      manager: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      comment: '',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (partnerId === 0) {
      dispatch(createPartner(partnerData))
      clear()
      setVisible(!visible)
    } else {
      dispatch(updatePartner(partnerId, partnerData))
      clear()
      setVisible(!visible)
      console.log('PartnerId already exists')
    }
  }

  return (
    <>
      <CRow>
        <CCol>
          <CButton className="m-2" onClick={() => setVisible(!visible)}>
            New Partner
          </CButton>
          <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader>
              <CModalTitle>Modal title</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CForm className="row g-3" onSubmit={handleSubmit}>
                <CCol md={12}>
                  <CFormLabel htmlFor="company">Partner Information</CFormLabel>
                  <CFormInput
                    type="text"
                    id="company"
                    value={partnerData.company}
                    onChange={(e) => setPartnerData({ ...partnerData, company: e.target.value })}
                    required
                  />
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="manager">Manager</CFormLabel>
                  <CFormInput
                    type="text"
                    id="manager"
                    value={partnerData.manager}
                    onChange={(e) => setPartnerData({ ...partnerData, manager: e.target.value })}
                    required
                  />
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="phone">Phone</CFormLabel>
                  <CFormInput
                    type="text"
                    id="phone"
                    value={partnerData.phone}
                    onChange={(e) => setPartnerData({ ...partnerData, phone: e.target.value })}
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="address">Address</CFormLabel>
                  <CFormInput
                    type="text"
                    id="address"
                    value={partnerData.address}
                    onChange={(e) => setPartnerData({ ...partnerData, address: e.target.value })}
                    required
                  />
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="city">City</CFormLabel>
                  <CFormSelect
                    id="city"
                    value={partnerData.city}
                    onChange={(e) => setPartnerData({ ...partnerData, city: e.target.value })}
                  >
                    <option>Choose...</option>
                    <option>Moreno Valley</option>
                    <option>Perris</option>
                    <option>Riverside</option>
                  </CFormSelect>
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="state">State</CFormLabel>
                  <CFormInput
                    type="text"
                    id="state"
                    value={partnerData.state}
                    onChange={(e) => setPartnerData({ ...partnerData, state: e.target.value })}
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="phoneNum">Comments </CFormLabel>
                  <CFormInput
                    type="text"
                    id="comments"
                    value={partnerData.comment}
                    onChange={(e) => setPartnerData({ ...partnerData, comment: e.target.value })}
                    required
                  />
                </CCol>
                <CButton color="primary" type="submit">
                  Add
                </CButton>
                <CButton color="secondary" onClick={() => clear()}>
                  Clear
                </CButton>
              </CForm>
            </CModalBody>
            <CModalFooter></CModalFooter>
          </CModal>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <PartnerTable
            setPartnerId={setPartnerId}
            partnerId={partnerId}
            partnerData={partnerData}
            setPartnerData={setPartnerData}
            setVisible={setVisible}
            visible={visible}
          />
        </CCol>
      </CRow>
    </>
  )
}

PartnerForm.propTypes = {
  setPartnerId: PropTypes.any,
  partnerId: PropTypes.any,
}

export default PartnerForm
