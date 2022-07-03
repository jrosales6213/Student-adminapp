import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployees, createEmployee, updateEmployee } from '../redux/actions/employees'
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
import EmployeeTable from './EmployeeTable'

const EmployeeForm = ({ employeeId, setEmployeeId }) => {
  const [visible, setVisible] = useState(false)
  const [employeeInput, setEmployeeInput] = useState({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    title: PropTypes.string,
  })

  const newEmployee = useSelector((state) =>
    employeeId ? state.employees.find((employee) => employee._id === employeeId) : null,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEmployees())
  }, [employeeId, dispatch])

  useEffect(() => {
    if (newEmployee) setEmployeeInput(newEmployee)
  }, [newEmployee])

  const clear = () => {
    setEmployeeId(0)
    setEmployeeInput({
      firstname: '',
      lastname: '',
      title: '',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (employeeId === 0) {
      dispatch(createEmployee(employeeInput))
      clear()
      setVisible(!visible)
    } else {
      dispatch(updateEmployee(employeeId, employeeInput))
      clear()
      setVisible(!visible)
      console.log('EmployeeId already exists')
    }
  }

  return (
    <>
      <CRow>
        <CCol>
          <CButton className="m-2" onClick={() => setVisible(!visible)}>
            New Employee
          </CButton>
          <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader>
              <CModalTitle>Staff Information</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CForm className="row g-3" onSubmit={handleSubmit}>
                <CCol md={12}>
                  <CFormLabel htmlFor="company">First Name</CFormLabel>
                  <CFormInput
                    type="text"
                    id="firstname"
                    value={employeeInput.firstname}
                    onChange={(e) =>
                      setEmployeeInput({ ...employeeInput, firstname: e.target.value })
                    }
                    required
                  />
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="manager">Last Name</CFormLabel>
                  <CFormInput
                    type="text"
                    id="lastname"
                    value={employeeInput.lastname}
                    onChange={(e) =>
                      setEmployeeInput({ ...employeeInput, lastname: e.target.value })
                    }
                    required
                  />
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="phone">Title</CFormLabel>
                  <CFormInput
                    type="text"
                    id="title"
                    value={employeeInput.title}
                    onChange={(e) => setEmployeeInput({ ...employeeInput, title: e.target.value })}
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
          </CModal>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <EmployeeTable
            setEmployeeId={setEmployeeId}
            employeeId={employeeId}
            employeeInput={employeeInput}
            setEmployeeInput={setEmployeeInput}
            setVisible={setVisible}
            visible={visible}
          />
        </CCol>
      </CRow>
    </>
  )
}

EmployeeForm.propTypes = {
  employeeId: PropTypes.any,
  setEmployeeId: PropTypes.any,
}
EmployeeTable.propTypes = {
  employeeId: PropTypes.any,
  setEmployeeId: PropTypes.any,
  employeeInput: PropTypes.any,
  setEmployeeInput: PropTypes.any,
  setVisible: PropTypes.any,
  visible: PropTypes.any,
}
export default EmployeeForm
