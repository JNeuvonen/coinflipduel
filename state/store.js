import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from './reducer/index'

// initial states here
const initalState = {
  account: null,
  errorMessage: null,
  infoMessage: null,
  infoMessageType: null,
  infoMessageTimeout: null,
  infoMessageTs: null,
  loadingSpinner: true,
}

// middleware
const middleware = [thunk]

// creating store
export const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
)

// assigning store to next wrapper
const makeStore = () => store

export const wrapper = createWrapper(makeStore)
