import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';
import todo from './reducers/todo'
import history from '../utils/history'

export default function rootReducers(injectedReducers = {}) {
  return combineReducers({
    todo,
    router: connectRouter(history),
    ...injectedReducers
  })
}