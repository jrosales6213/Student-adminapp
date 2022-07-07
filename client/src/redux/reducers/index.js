import { combineReducers } from 'redux'

import students from './students'
import partners from './partners'
import employees from './employees'
import tasks from './tasks'
import events from './events'
import budgets from './budgets'
import payrolls from './payrolls'

export const reducers = combineReducers({
  students,
  partners,
  employees,
  tasks,
  events,
  budgets,
  payrolls,
})
