import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { deletePayroll } from '../redux/actions/payrolls'
// import FileBase from 'react-file-base64';
import {
  CCol,
  CRow,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilCheck, cilTrash } from '@coreui/icons'
// import { updateTask, deleteTask } from 'src/redux/api'
// import StudentTable from './StudentTable'
function PayrollRow({ payrolls, setPayrollId }) {
  // const [completed, setCompleted] = useState(true)

  const dispatch = useDispatch()

  return (
    <>
      {payrolls.map((payroll) => (
        <CTableRow key={payroll._id}>
          <CTableDataCell>
            {payroll.pay_period}
            {/* {payroll.task.charAt(0).toUpperCase() + task.task.substring(1)} */}
          </CTableDataCell>
          <CTableDataCell> {payroll.amount}</CTableDataCell>
          <CTableDataCell className="d-flex justify-content-center">
            <CCol>
              <CIcon
                icon={cilCheck}
                size={'lg'}
                className="edit-button"
                onClick={() => setPayrollId(payroll._id)}
              ></CIcon>
            </CCol>

            {/* Will need to add completed functionality in the future */}

            <CCol>
              <CIcon
                icon={cilTrash}
                size={'lg'}
                className="delete-button"
                onClick={() => dispatch(deletePayroll(payroll._id))}
              ></CIcon>
            </CCol>
          </CTableDataCell>
        </CTableRow>
      ))}
    </>
  )
}

const PayrollTable = ({ setPayrollId }) => {
  //   const [completed, setCompleted] = useState(true)
  const payrolls = useSelector((state) => state.payrolls)
  return (
    <>
      <CRow className="mt-4">
        <CCol>
          <CCol xs={12}>
            <CCard className="mb-2">
              <CCardHeader>
                <strong>Pay Period</strong>
              </CCardHeader>
              <CCardBody>
                <CTable hover responsive>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Task</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Due By</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <PayrollRow payrolls={payrolls} setPayrollId={setPayrollId} />
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CCol>
      </CRow>
    </>
  )
}

PayrollTable.propTypes = {
  tasks: PropTypes.any,
  setPayrollId: PropTypes.any,
  payrollData: PropTypes.any,
  setPayrollData: PropTypes.any,
}
PayrollRow.propTypes = {
  payrolls: PropTypes.any,
  setPayrollId: PropTypes.any,
}
export default PayrollTable
