import { combineReducers } from 'redux'

import students from './students'
import partners from './partners'
import employees from './employees'

export const reducers = combineReducers({ students, partners, employees })
