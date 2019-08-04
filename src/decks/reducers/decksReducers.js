import * as DecksActions from '../actions/decksActions';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export default function decksReducer(state = initialState, action) {
  switch (action.type) {
    case DecksActions.FETCH_DECKS_STARTED: {
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    }
    case DecksActions.FETCH_DECKS_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    }
    case DecksActions.FETCH_DECKS_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
