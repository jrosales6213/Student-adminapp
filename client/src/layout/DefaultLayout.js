import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

import { getPosts } from '../redux/actions/posts'

const DefaultLayout = () => {
  // const [currentId, setCurrentId] = useState(0)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getPosts())
  // }, [currentId, dispatch])

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
