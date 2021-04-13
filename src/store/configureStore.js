import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk'

import rootReducers from './rootReducers'

const reduxSagaMonitorOptions = {}
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
export default function configureStore(initialState = {}, history) {
  const middlewares = [sagaMiddleware, thunkMiddleware, routerMiddleware(history)]

  const enhancers = [applyMiddleware(...middlewares)]
  return createStore(
    rootReducers(),
    initialState,
    compose(...enhancers),
  )
}