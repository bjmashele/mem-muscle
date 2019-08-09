import { fromJS } from 'immutable';
import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const authInitialState = {
  authenticated: '',
  errorMessage: '',
};

export default function (state = authInitialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
