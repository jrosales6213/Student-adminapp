import { combineReducers } from 'redux'

import posts from './students'
import partners from './partners'

export const reducers = combineReducers({ posts, partners })
