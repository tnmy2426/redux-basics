import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'

import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(logger))
)
