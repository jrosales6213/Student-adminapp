import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updatePayroll, createPayroll } from 'src/redux/actions/payrolls.js'

import {
  CButton,
  CForm,
  CFormInput,
  CRow,
  CCard,
  CCardBody,
  CCardHeader,
  CInputGroup,
  CFormSelect,
} from '@coreui/react'

import PayrollTable from './PayrollTable'
import PayPeriods from './PayPeriods'

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
  const payrolls = useSelector((state) => state.payrolls)

  const DefaultLayOut = () => {
    return <h3 className="text-center text-secondary m-4">No Payroll added</h3>
  }
  return (
    <>
      <CCard className="mt-4">
        <CCardHeader>Payroll</CCardHeader>
        <CCardBody>
          <CRow>
            <CForm onSubmit={handleSubmit}>
              <CInputGroup className="mb-3">
                <CFormSelect
                  id="payperiod"
                  value={payrollData.pay_period}
                  onChange={(e) => setPayrollData({ ...payrollData, pay_period: e.target.value })}
                >
                  {PayPeriods.map((period) => (
                    <option value={period} key={period}>
                      {period}
                    </option>
                  ))}
                </CFormSelect>

                <CFormInput
                  placeholder="Amount"
                  type="text"
                  id="amount"
                  value={payrollData.amount}
                  onChange={(e) => setPayrollData({ ...payrollData, amount: e.target.value })}
                  required
                />

                <CButton type="submit" color="primary">
                  +
                </CButton>
              </CInputGroup>
            </CForm>
          </CRow>
        </CCardBody>
      </CCard>
      {payrolls.length === 0 ? (
        <DefaultLayOut />
      ) : (
        <PayrollTable setPayrollId={setPayrollId} payrolls={payrolls} />
      )}
    </>
  )
}

PayrollForm.propTypes = {
  setPayrollId: PropTypes.any,
  payrollId: PropTypes.any,
}
PayrollTable.prototype = {
  setPayrollId: PropTypes.any,
  payrolls: PropTypes.any,
}

export default PayrollForm
