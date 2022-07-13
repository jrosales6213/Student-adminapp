import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import {
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CRow,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CListGroup,
  CListGroupItem,
  CFormSelect,
} from '@coreui/react'
import { createBudget, updateBudget } from 'src/redux/actions/budgets.js'

import PayrollForm from './PayrollForm'

const BudgetForm = ({ budgetId, setBudgetId, budgets, payrollId, setPayrollId }) => {
  const [visible, setVisible] = useState(false)

  const [budgetData, setBudgetData] = useState({
    title: PropTypes.any,
    amount: PropTypes.any,
  })

  const newBudget = useSelector((state) =>
    budgetId ? state.budgets.find((budget) => budget._id === budgetId) : null,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (newBudget) setBudgetData(newBudget)
  }, [newBudget])

  const clear = () => {
    setBudgetId(0)
    setBudgetData({
      title: '',
      amount: '',
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (budgetId === 0) {
      dispatch(createBudget(budgetData))
      clear()
      setVisible(!visible)
    } else {
      dispatch(updateBudget(budgetId, budgetData))
      clear()
      setVisible(!visible)
      console.log('BudgetId already exists')
    }
  }

  let dollarUS = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const DefaultLayOut = () => {
    return <h3 className=" text-secondary m-4">No Budget set</h3>
  }
  return (
    <>
      <CRow>
        <CCol xs={4}>
          {budgets.length === 0 ? (
            <DefaultLayOut />
          ) : (
            <CListGroup>
              {budgets.map((budget) => (
                <CListGroupItem key={budget._id}>
                  {dollarUS.format(budget.amount) + ' received for the '}
                  {budget.title}
                </CListGroupItem>
              ))}
            </CListGroup>
          )}

          <CButton className="m-2" onClick={() => setVisible(!visible)}>
            New Budget
          </CButton>

          <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader>
              <CModalTitle>Set Budget</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CForm className="row g-3" onSubmit={handleSubmit}>
                <CCol md={12}>
                  <CFormLabel htmlFor="title">Title</CFormLabel>
                  <CFormSelect
                    id="title"
                    type="text"
                    value={budgetData.title}
                    onChange={(e) => setBudgetData({ ...budgetData, title: e.target.value })}
                  >
                    <option>Choose...</option>
                    <option>2022-2023 School Year</option>
                    <option>2023-2024 School Year</option>
                    <option>2024-2025 School Year</option>
                    <option>2025-2026 School Year</option>
                  </CFormSelect>
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="amount">Amount</CFormLabel>
                  <CFormInput
                    type="text"
                    id="amount"
                    value={budgetData.amount}
                    onChange={(e) => setBudgetData({ ...budgetData, amount: e.target.value })}
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
          <PayrollForm
            budgetId={budgetId}
            setBudgetId={setBudgetId}
            payrollId={payrollId}
            setPayrollId={setPayrollId}
          />
        </CCol>
      </CRow>
    </>
  )
}

BudgetForm.propTypes = {
  budgetId: PropTypes.any,
  setBudgetId: PropTypes.any,
  budgets: PropTypes.any,
  payrollId: PropTypes.any,
  setPayrollId: PropTypes.any,
}
PayrollForm.propTypes = {
  budgetId: PropTypes.any,
  setBudgetId: PropTypes.any,
  payrollId: PropTypes.any,
  setPayrollId: PropTypes.any,
}

export default BudgetForm
