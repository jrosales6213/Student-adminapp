import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../redux/actions/posts'
// import FileBase from 'react-file-base64';
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import StudentTable from './StudentTable'

const StudentForm = ({ currentId, setCurrentId }) => {
  const [visible, setVisible] = useState(false)
  const [postData, setPostData] = useState({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    studentID: PropTypes.number,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    mobile: PropTypes.string,
    email: PropTypes.string,
    // jobsite: PropTypes.object,
  })

  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (post) setPostData(post)
  }, [post])

  const clear = () => {
    setCurrentId(0)
    setPostData({
      firstname: '',
      lastname: '',
      studentID: '',
      address: '',
      city: '',
      state: '',
      mobile: '',
      email: '',
      // jobsite: '',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (currentId === 0) {
      dispatch(createPost(postData))
      clear()
      setVisible(!visible)
    } else {
      dispatch(updatePost(currentId, postData))
      clear()
      setVisible(!visible)
      console.log('CurrentId already exists')
    }
  }

  return (
    <>
      <CRow>
        <CCol>
          <CButton className="m-2" onClick={() => setVisible(!visible)}>
            New Student
          </CButton>
          <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader>
              <CModalTitle>Modal title</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CForm className="row g-3" onSubmit={handleSubmit}>
                <CCol md={12}>
                  <CFormLabel htmlFor="firstName">First Name</CFormLabel>
                  <CFormInput
                    type="text"
                    id="firstName"
                    value={postData.firstname}
                    onChange={(e) => setPostData({ ...postData, firstname: e.target.value })}
                    required
                  />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="lastName">Last Name</CFormLabel>
                  <CFormInput
                    type="text"
                    id="lastName"
                    value={postData.lastname}
                    onChange={(e) => setPostData({ ...postData, lastname: e.target.value })}
                    required
                  />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CCol>
                <CCol md={12}>
                  <CFormLabel htmlFor="studentID">Student ID</CFormLabel>
                  <CFormInput
                    type="text"
                    id="studentID"
                    value={postData.studentID}
                    onChange={(e) => setPostData({ ...postData, studentID: e.target.value })}
                    required
                  />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="address">Address</CFormLabel>
                  <CFormInput
                    type="text"
                    id="address"
                    value={postData.address}
                    onChange={(e) => setPostData({ ...postData, address: e.target.value })}
                    required
                  />
                  <CFormFeedback invalid>Please provide a valid Address</CFormFeedback>
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="city">City</CFormLabel>
                  <CFormSelect
                    id="city"
                    value={postData.city}
                    onChange={(e) => setPostData({ ...postData, city: e.target.value })}
                  >
                    <option>Choose...</option>
                    <option>Moreno Valley</option>
                    <option>Perris</option>
                    <option>Riverside</option>
                  </CFormSelect>
                  <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="zip">State</CFormLabel>
                  <CFormInput
                    type="text"
                    id="state"
                    value={postData.state}
                    onChange={(e) => setPostData({ ...postData, state: e.target.value })}
                    required
                  />
                  <CFormFeedback invalid>Please provide a valid Zip</CFormFeedback>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="phoneNum">Phone # </CFormLabel>
                  <CFormInput
                    type="text"
                    id="phoneNum"
                    value={postData.mobile}
                    onChange={(e) => setPostData({ ...postData, mobile: e.target.value })}
                    required
                  />
                  <CFormFeedback invalid>Please provide a valid Number</CFormFeedback>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="email">Email</CFormLabel>
                  <CFormInput
                    type="text"
                    id="email"
                    value={postData.email}
                    onChange={(e) => setPostData({ ...postData, email: e.target.value })}
                    required
                  />
                  <CFormFeedback invalid>Please provide a valid Email</CFormFeedback>
                </CCol>
                <CButton color="primary" type="submit">
                  Add
                </CButton>
                <CButton color="secondary" onClick={() => clear()}>
                  Clear
                </CButton>
              </CForm>
            </CModalBody>
            <CModalFooter></CModalFooter>
          </CModal>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <StudentTable
            setCurrentId={setCurrentId}
            currentId={currentId}
            postData={postData}
            setPostData={setPostData}
            setVisible={setVisible}
            visible={visible}
          />
        </CCol>
      </CRow>
    </>
  )
}

export default StudentForm

StudentForm.propTypes = {
  currentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setCurrentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
