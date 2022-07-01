import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../actionTypes'

export default (partners = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    case CREATE:
      return [...partners, action.payload]
    case UPDATE:
      return partners.map((partner) =>
        partner._id === action.payload._id ? action.payload : partner,
      )
    case DELETE:
      return partners.filter((partner) => partner._id !== action.payload)
    default:
      return partners
  }
}
