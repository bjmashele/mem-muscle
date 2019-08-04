import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from '../auth/reducers/auth';
import { default as decksReducer } from '../decks/reducers/decksReducers';

// One root reducer for the whole app. This is done so that the app will have one single reducer to manage lots of other resources.
// And also communication between the reducers will be easier to maintain.

console.log(typeof decksReducer);
const rootReducer = combineReducers({
  auth,
  form: formReducer,
  decksReducer,
});

export default rootReducer;
