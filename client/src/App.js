import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import './scss/style.scss'
const MainLayout = React.lazy(() => import('./components/index'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route path="*" name="Home" element={<MainLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
