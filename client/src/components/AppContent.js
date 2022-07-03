import React, { Suspense, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import PropTypes from 'prop-types'

import StudentForm from './StudentForm.js'
import PartnerForm from './PartnerForm.js'
import EmployeeForm from './EmployeeForm.js'

import routes from '../routes'

const AppContent = () => {
  const [currentId, setCurrentId] = useState(0)
  const [partnerId, setPartnerId] = useState(0)
  const [employeeId, setEmployeeId] = useState(0)

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route
            path="/students"
            element={<StudentForm currentId={currentId} setCurrentId={setCurrentId} />}
          />
          <Route
            path="/partners"
            element={<PartnerForm partnerId={partnerId} setPartnerId={setPartnerId} />}
          />
          <Route
            path="/employees"
            element={<EmployeeForm employeeId={employeeId} setEmployeeId={setEmployeeId} />}
          />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

// export default AppContent

StudentForm.propTypes = {
  // currentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // setCurrentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setCurrentId: PropTypes.any,
  currentId: PropTypes.any,
}
PartnerForm.propTypes = {
  setPartnerId: PropTypes.any,
  partnerId: PropTypes.any,
}
EmployeeForm.propTypes = {
  employeeId: PropTypes.any,
  setEmployeeId: PropTypes.any,
}
export default React.memo(AppContent)
