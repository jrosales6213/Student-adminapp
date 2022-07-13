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
import './Employee.css'

import CIcon from '@coreui/icons-react'
import { cilPencil, cilTrash } from '@coreui/icons'
import { useDispatch } from 'react-redux'
import { deleteEmployee } from 'src/redux/actions/employees'

function EmployeeRow({ employees, setEmployeeId, setVisible, visible }) {
  const dispatch = useDispatch()

  function handleEdit(item) {
    setVisible(!visible)
    setEmployeeId(item)
  }
  return (
    <>
      {employees.map((employee) => (
        <CTableRow key={employee._id}>
          <CTableDataCell>{employee.firstname}</CTableDataCell>
          <CTableDataCell>{employee.lastname}</CTableDataCell>
          <CTableDataCell>{employee.title}</CTableDataCell>
          <CTableDataCell className="d-flex justify-content-center">
            <CCol>
              <CIcon
                icon={cilPencil}
                size={'lg'}
                className="edit-button"
                type="submit"
                onClick={() => handleEdit(employee._id)}
              ></CIcon>
            </CCol>
            <CCol>
              <CIcon
                icon={cilTrash}
                size={'lg'}
                className="delete-button"
                onClick={() => dispatch(deleteEmployee(employee._id))}
              ></CIcon>
            </CCol>
          </CTableDataCell>
        </CTableRow>
      ))}
    </>
  )
}

const EmployeeTable = ({
  employeeId,
  setEmployeeId,
  employeeInput,
  setEmployeeInput,
  setVisible,
  visible,
  employees,
}) => {
  return (
    <CRow>
      <CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Staff Members</strong>
            </CCardHeader>
            <CCardBody>
              <CTable hover responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Job Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <EmployeeRow
                    employees={employees}
                    employeeId={employeeId}
                    setEmployeeId={setEmployeeId}
                    employeeInput={employeeInput}
                    setEmployeeInput={setEmployeeInput}
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

EmployeeTable.propTypes = {
  employees: PropTypes.any,
  setEmployeeId: PropTypes.any,
  employeeId: PropTypes.any,
  employeeInput: PropTypes.any,
  setEmployeeInput: PropTypes.any,
  setVisible: PropTypes.any,
  visible: PropTypes.any,
}
EmployeeRow.propTypes = {
  employees: PropTypes.any,
  setEmployeeId: PropTypes.any,
  employeeId: PropTypes.any,
  employeeInput: PropTypes.any,
  setEmployeeInput: PropTypes.any,
  setVisible: PropTypes.any,
  visible: PropTypes.any,
}

export default EmployeeTable
