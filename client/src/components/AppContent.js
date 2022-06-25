import React, { Suspense, useState, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../redux/actions/posts'
import PropTypes from 'prop-types'

import StudentForm from './StudentForm.js'

// routes config
// import routes from '../routes'

const AppContent = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {/* {routes.map((route, idx) => {
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
          })} */}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route
            path="/students"
            element={<StudentForm currentId={currentId} setCurrentId={setCurrentId} />}
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
export default React.memo(AppContent)
