import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="me-1">Created by</span>
        <a href="https://www.jrosales.site/" target="_blank" rel="noopener noreferrer">
          jrosales
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
