import React, { useEffect } from 'react'
import { ReactDOM } from 'react-dom'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cibGoogle } from '@coreui/icons'
import { GoogleLogin } from 'react-google-login'
import './style.css'

// const responseGoogle = (response) => {
//   console.log(response);
// }

// ReactDOM.render(
//   <GoogleLogin
//     clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//     cookiePolicy={'single_host_origin'}
//   />,
//   document.getElementById('googleButton'),
// )

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response)
  }
  // function handleCallbackResponse() {

  // }
  //  useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id : "78632618531-t0qv5f733vkhojmmurkrq345b6aia9qs.apps.googleusercontent.com",
  //     callback : handleCallbackResponse
  //   });
  //   google.accounts.id.renderButton({
  //     document.getElementById("signIn"),

  //   })

  //  }, [])
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={12} className="pt-4">
                        <GoogleLogin
                          clientId="78632618531-t0qv5f733vkhojmmurkrq345b6aia9qs.apps.googleusercontent.com"
                          buttonText="Login"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={'single_host_origin'}
                        />

                        {/* <GoogleLogin
                          clientId="600587072503-kmevdjn67pa2smp81l4ba68ou9ifvc5g.apps.googleusercontent.com"
                          render={(renderProps) => (
                            <CButton
                              className="px-4"
                              color="primary"
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                              variant="contained"
                            >
                              Google Sign In
                            </CButton>
                          )}
                        /> */}
                        {/* <CButton color="primary" className="px-4">
                          <CIcon className="google-icon" icon={cibGoogle} />
                          <span className="p-2 text-light">Google Sign In</span>
                        </CButton> */}
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Sign up to use BTA Studio</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
