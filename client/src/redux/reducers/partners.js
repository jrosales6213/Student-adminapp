import { FETCH_PARTNERS, CREATE_PARTNER, UPDATE_PARTNER, DELETE_PARTNER } from '../actionTypes'

export default (partners = [], action) => {
  switch (action.type) {
    case FETCH_PARTNERS:
      return action.payload
    case CREATE_PARTNER:
      return [...partners, action.payload]
    case UPDATE_PARTNER:
      return partners.map((partner) =>
        partner._id === action.payload._id ? action.payload : partner,
      )
    case DELETE_PARTNER:
      return partners.filter((partner) => partner._id !== action.payload)
    default:
      return partners
  }
}
