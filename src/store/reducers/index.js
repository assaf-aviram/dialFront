import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import geo from './geo'

export default combineReducers({
  router: routerReducer,
  counter,
  geo,
})
