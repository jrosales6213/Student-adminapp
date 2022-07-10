import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { CRow, CCol, CWidgetStatsF } from '@coreui/react'
import { useSelector } from 'react-redux'
import CIcon from '@coreui/icons-react'
import { cilClipboard, cilEducation, cilGroup, cilMoney } from '@coreui/icons'

const WidgetsDropdown = ({ budgets }) => {
  const students = useSelector((state) => state.students)
  const partners = useSelector((state) => state.partners)
  const tasks = useSelector((state) => state.tasks)
  const payrolls = useSelector((state) => state.payrolls)

  const title = budgets.map((budget) => budget.title)
  const amount = budgets.map((budget) => budget.amount)
  let initialValue = 0
  const totalPayrolls = payrolls
    .map((payroll) => payroll.amount)
    .reduce((previous, current) => previous + current, initialValue)

  const remainingAmount = amount - totalPayrolls

  let dollarUS = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  return (
    <CRow>
      <CCol xs={6}>
        <CWidgetStatsF
          className="mb-3"
          color="success"
          icon={<CIcon icon={cilMoney} height={24} />}
          title="Balance"
          value={dollarUS.format(remainingAmount)}
        />
      </CCol>
      <CCol xs={6}>
        <CWidgetStatsF
          className="mb-3"
          color="primary"
          icon={<CIcon icon={cilEducation} height={24} />}
          title="Students"
          value={students.length}
        />
      </CCol>
      <CCol xs={6}>
        <CWidgetStatsF
          className="mb-3"
          color="danger"
          icon={<CIcon icon={cilGroup} height={24} />}
          title="Partners"
          value={partners.length}
        />
      </CCol>
      <CCol xs={6}>
        <CWidgetStatsF
          className="mb-3"
          color="warning"
          icon={<CIcon icon={cilClipboard} height={24} />}
          title="Pending Task"
          value={tasks.length}
        />
      </CCol>
    </CRow>
  )
}

WidgetsDropdown.propTypes = {
  budgets: PropTypes.any,
}

export default WidgetsDropdown
