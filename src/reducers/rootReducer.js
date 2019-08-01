
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from '../auth/reducers/auth'

//One root reducer for the whole app. This is done so that the app will have one single reducer to manage lots of other resources.
// And also communication between the reducers will be easier to maintain.
 
const rootReducer = combineReducers({
    auth,
    form: formReducer
    
})

export default rootReducer