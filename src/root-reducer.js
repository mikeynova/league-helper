import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import setSummonerInfo from './reducers/summoner-info'

export default combineReducers({
  routerReducer,
  setSummonerInfo,
})
