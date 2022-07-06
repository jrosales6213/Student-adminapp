import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updateEvent, createEvent } from '../redux/actions/events.js'

import {
  CButton,
  CForm,
  CFormInput,
  CRow,
  CCard,
  CCardBody,
  CCardHeader,
  CInputGroup,
} from '@coreui/react'
import EventTable from './EventTable'

const EventForm = ({ eventId, setEventId }) => {
  const [eventData, setEventData] = useState({
    event: PropTypes.string,
    date: PropTypes.any,
  })
  const newEvent = useSelector((state) =>
    eventId ? state.events.find((event) => event._id === eventId) : null,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (newEvent) setEventData(newEvent)
  }, [newEvent])

  const clear = () => {
    setEventId(0)
    setEventData({
      event: '',
      date: '',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (eventId === 0) {
      dispatch(createEvent(eventData))
      clear()
    } else {
      dispatch(updateEvent(eventId, eventData))
      clear()
      console.log('EventId already exists')
    }
  }
  return (
    <>
      <CCard>
        <CCardHeader>Events</CCardHeader>
        <CCardBody>
          <CRow>
            <CForm onSubmit={handleSubmit}>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Event"
                  type="text"
                  id="event"
                  value={eventData.event}
                  onChange={(e) => setEventData({ ...eventData, event: e.target.value })}
                  required
                />
                <CFormInput
                  placeholder="Date"
                  type="date"
                  id="date"
                  value={eventData.date}
                  onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
                  required
                />

                <CButton type="submit" color="primary" id="button-addon2">
                  +
                </CButton>
              </CInputGroup>
            </CForm>
          </CRow>
        </CCardBody>
      </CCard>
      <EventTable
        eventData={eventData}
        setEventData={setEventData}
        eventId={eventId}
        setEventId={setEventId}
      />
    </>
  )
}

EventForm.propTypes = {
  setEventId: PropTypes.any,
  eventId: PropTypes.any,
}
EventTable.prototype = {
  setEventId: PropTypes.any,
  eventId: PropTypes.any,
  eventData: PropTypes.any,
  setEventData: PropTypes.any,
}

export default EventForm
