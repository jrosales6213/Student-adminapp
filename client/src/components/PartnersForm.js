import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CRow,
  CInputGroupText,
  CFormTextarea,
} from '@coreui/react'
import StudentTable from './StudentTable'
import PartnerTable from './PartnersTable'

const PartnerForm = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel htmlFor="company">Company</CFormLabel>
              <CFormInput type="text" id="company" required />
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="manager">Manager</CFormLabel>
              <CFormInput type="text" id="manager" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="Address">Address</CFormLabel>
              <CFormInput type="text" id="validationCustom03" required />
              <CFormFeedback invalid>Please provide a valid Address</CFormFeedback>
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="city">City</CFormLabel>
              <CFormSelect id="city">
                <option disabled>Choose...</option>
                <option>Moreno Valley</option>
                <option>Perris</option>
                <option>Riverside</option>
              </CFormSelect>
              <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="zipcode">Zip</CFormLabel>
              <CFormInput type="text" id="zipcode" required />
              <CFormFeedback invalid>Please provide a valid Zip</CFormFeedback>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="phoneNum">Phone # </CFormLabel>
              <CFormInput type="text" id="phoneNum" required />
              <CFormFeedback invalid>Please provide a valid Number</CFormFeedback>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="email">Email</CFormLabel>
              <CFormInput type="text" id="email" required />
              <CFormFeedback invalid>Please provide a valid Email</CFormFeedback>
            </CCol>
            <CCol>
              <CFormLabel htmlFor="notes">Notes</CFormLabel>
              <CFormTextarea aria-label="With textarea" id="notes" type="text"></CFormTextarea>
            </CCol>
            <CCol xs={12} className="mb-5">
              <CButton color="primary" type="submit">
                Submit
              </CButton>
            </CCol>
          </CForm>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <PartnerTable />
        </CCol>
      </CRow>
    </>
  )
}

export default PartnerForm
