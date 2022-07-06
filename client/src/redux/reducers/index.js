import { combineReducers } from 'redux'

import students from './students'
import partners from './partners'
import employees from './employees'
import tasks from './tasks'
import events from './events'

export const reducers = combineReducers({ students, partners, employees, tasks, events })
