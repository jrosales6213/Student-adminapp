import React from 'react'
import { CRow, CCol, CWidgetStatsF } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilClipboard, cilEducation, cilGroup, cilMoney } from '@coreui/icons'

const WidgetsDropdown = () => {
  return (
    <CRow>
      <CCol xs={6}>
        <CWidgetStatsF
          className="mb-3"
          color="success"
          icon={<CIcon icon={cilMoney} height={24} />}
          title="Budget"
          value="$23,000"
        />
      </CCol>
      <CCol xs={6}>
        <CWidgetStatsF
          className="mb-3"
          color="primary"
          icon={<CIcon icon={cilEducation} height={24} />}
          title="Students"
          value="40"
        />
      </CCol>
      <CCol xs={6}>
        <CWidgetStatsF
          className="mb-3"
          color="danger"
          icon={<CIcon icon={cilGroup} height={24} />}
          title="Partners"
          value="6"
        />
      </CCol>
      <CCol xs={6}>
        <CWidgetStatsF
          className="mb-3"
          color="warning"
          icon={<CIcon icon={cilClipboard} height={24} />}
          title="Pending Task"
          value="4"
        />
      </CCol>
    </CRow>
  )
}

// export default WidgetsDropdown
