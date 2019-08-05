import * as DecksActions from '../actions/decksActions';

const initialState = {
  items: {},
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
    case DecksActions.RECEIVE_ENTITIES: {
      const { entities } = action.payload;
      if (entities && entities.decks) {
        return {
          ...state,
          isLoading: false,
          data: entities.decks,
        };
      }
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
