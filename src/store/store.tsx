import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducers from './rootReducers'

export default createStore(rootReducers, applyMiddleware(thunkMiddleware))

