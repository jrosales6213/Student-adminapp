import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteEvent } from 'src/redux/actions/events'
// import FileBase from 'react-file-base64';
import {
  CCol,
  CRow,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilCheck, cilTrash } from '@coreui/icons'

function EventRow({ events, setEventId }) {
  const dispatch = useDispatch()

  return (
    <>
      {events.map((event) => (
        <CTableRow key={event._id}>
          <CTableDataCell>
            {event.event.charAt(0).toUpperCase() + event.event.substring(1)}
          </CTableDataCell>
          <CTableDataCell> {new Date(event.date).toLocaleDateString()}</CTableDataCell>
          <CTableDataCell className="d-flex justify-content-center">
            <CCol>
              <CIcon
                icon={cilCheck}
                size={'lg'}
                className="edit-button"
                onClick={() => setEventId(event._id)}
              ></CIcon>
            </CCol>

            {/* Will need to add completed functionality in the future */}

            <CCol>
              <CIcon
                icon={cilTrash}
                size={'lg'}
                className="delete-button"
                onClick={() => dispatch(deleteEvent(event._id))}
              ></CIcon>
            </CCol>
          </CTableDataCell>
        </CTableRow>
      ))}
    </>
  )
}

const EventTable = ({ eventId, setEventId, eventData, setEventData, events }) => {
  return (
    <>
      <CRow className="mt-4">
        <CCol>
          <CCol xs={12}>
            <CCard className="mb-2">
              <CCardHeader>
                <strong>Events</strong>
              </CCardHeader>
              <CCardBody>
                <CTable hover responsive>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Event</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <EventRow
                      events={events}
                      eventId={eventId}
                      setEventId={setEventId}
                      eventData={eventData}
                      setEventData={setEventData}
                    />
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CCol>
      </CRow>
    </>
  )
}

EventTable.propTypes = {
  events: PropTypes.any,
  eventId: PropTypes.any,
  setEventId: PropTypes.any,
  eventData: PropTypes.any,
  setEventData: PropTypes.any,
}
EventRow.propTypes = {
  events: PropTypes.any,
  eventId: PropTypes.any,
  setEventId: PropTypes.any,
  eventData: PropTypes.any,
  setEventData: PropTypes.any,
}
export default EventTable
