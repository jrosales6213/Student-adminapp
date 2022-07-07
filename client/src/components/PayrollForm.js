import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updatePayroll, createPayroll } from '../redux/actions/payrolls.js'

import {
  CButton,
  CForm,
  CFormInput,
  CRow,
  CCard,
  CCardBody,
  CCardHeader,
  CInputGroup,
} from '@coreui/react'

import PayrollTable from './PayrollTable'

const PayrollForm = ({ payrollId, setPayrollId }) => {
  const [payrollData, setPayrollData] = useState({
    pay_period: PropTypes.string,
    amount: PropTypes.any,
  })
  const newPayroll = useSelector((state) =>
    payrollId ? state.payrolls.find((payroll) => payroll._id === payrollId) : null,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (newPayroll) setPayrollData(newPayroll)
  }, [newPayroll])

  const clear = () => {
    setPayrollId(0)
    setPayrollData({
      pay_period: '',
      amount: '',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (payrollId === 0) {
      dispatch(createPayroll(payrollData))
      clear()
    } else {
      dispatch(updatePayroll(payrollId, payrollData))
      clear()
      console.log('EventId already exists')
    }
  }
  return (
    <>
      <CCard className="mt-4">
        <CCardHeader>Payroll</CCardHeader>
        <CCardBody>
          <CRow>
            <CForm onSubmit={handleSubmit}>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Pay-Period"
                  type="text"
                  id="payroll"
                  value={payrollData.pay_period}
                  onChange={(e) => setPayrollData({ ...payrollData, pay_period: e.target.value })}
                  required
                />

                <CFormInput
                  placeholder="Amount"
                  type="text"
                  id="amount"
                  value={payrollData.amount}
                  onChange={(e) => setPayrollData({ ...payrollData, amount: e.target.value })}
                  required
                />

                <CButton type="submit" color="primary" id="button-addon2">
                  +
                </CButton>
              </CInputGroup>
            </CForm>
          </CRow>
        </CCardBody>
      </CCard>
      <PayrollTable setPayrollId={setPayrollId} />
    </>
  )
}

PayrollForm.propTypes = {
  setPayrollId: PropTypes.any,
  payrollId: PropTypes.any,
}
PayrollTable.prototype = {
  setPayrollId: PropTypes.any,
}

export default PayrollForm
