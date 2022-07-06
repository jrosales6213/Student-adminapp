import { FETCH_EVENTS, CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../actionTypes'

export default (events = [], action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.payload
    case CREATE_EVENT:
      return [...events, action.payload]
    case UPDATE_EVENT:
      return events.map((event) => (event._id === action.payload._id ? action.payload : event))
    case DELETE_EVENT:
      return events.filter((event) => event._id !== action.payload)
    default:
      return events
  }
}
