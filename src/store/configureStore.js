import { createStore, applyMiddleware } from 'redux'

//Redux Thunk need to be added as a middleware

import thunkMiddleware from 'redux-thunk'

// Redux logging middleware
import { createLogger } from 'redux-logger'

// Add redux-devtools for debugging
import { composeWithDevTools } from 'redux-devtools-extension'


// Import the root reducer and initial state
import rootReducer from '../reducers/rootReducer'
import preloadedState from '../state/preloadedState'

// Create the redux logging middleware 
const loggerMiddleware = createLogger()

// Get preloaded state


// Configuring the Store. PreloadState is the initial State.
export function configureStore(preloadedState) {

  return createStore(
    rootReducer,
    preloadedState,
    
    //Apply the middleware usign the Redux's provided applymiddleware function
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  )
}