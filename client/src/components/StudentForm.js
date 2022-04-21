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
} from '@coreui/react'
import StudentTable from './StudentTable'

const StudentForm = () => {
  const [name, setName] = useState('')

  return (
    <>
      <CRow>
        <CCol>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel htmlFor="firstName">First Name</CFormLabel>
              <CFormInput
                type="text"
                id="firstName"
                value={name}
                onInput={(e) => setName(e.target.value)}
                required
              />
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="lastName">Last Name</CFormLabel>
              <CFormInput type="text" id="lastName" defaultValue="Otto" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="studentID">Student ID</CFormLabel>
              <CFormInput type="text" id="studentID" defaultValue="eg. 23434" required />
              <CFormFeedback valid>Looks good!</CFormFeedback>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="address">Address</CFormLabel>
              <CFormInput type="text" id="address" required />
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
              <CFormLabel htmlFor="zip">Zip</CFormLabel>
              <CFormInput type="text" id="zip" required />
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

            <CCol md={12}>
              <CFormLabel>Job Sites</CFormLabel>
              <CCol>
                <CFormCheck inline id="businessName" label="Del Taco" />
                <CFormCheck inline id="businessName" label="Fitness 19" />
                <CFormCheck inline id="businessName" label="Walgreens" />
                <CFormCheck inline id="businessName" label="Cafeteria" />
                <CFormCheck inline id="businessName" label="Preferred Plastics" />
                <CFormCheck inline id="businessName" label="Recycle" />
                <CFormCheck inline id="businessName" label="None" />
              </CCol>
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
          <StudentTable />
        </CCol>
      </CRow>
    </>
  )
}

export default StudentForm
