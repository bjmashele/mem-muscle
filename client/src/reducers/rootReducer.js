import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "../auth/reducers/auth";
import { default as decksReducer } from "../decks/reducers/decksReducers";

console.log(typeof decksReducer);
const rootReducer = combineReducers({
  auth,
  form: formReducer,
  decksReducer
});

export default rootReducer;
