import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import ReduxThunk from "redux-thunk";
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers/root-reducer'

const middlewares = [ReduxThunk, promiseMiddleware, logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store