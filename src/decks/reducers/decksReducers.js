import { fromJS } from 'immutable';
import * as DecksActions from '../actions/decksActions';

const initialDecksState = {
  decks: [],
  isLoading: false,
  error: null,
};

export default function decksReducer(state = initialDecksState, action) {
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
        decks: action.payload.decks,
        isLoading: false,
      };
    }
    case DecksActions.RECEIVE_ENTITIES: {
      const { entities } = action.payload;
      if (entities && entities.decks) {
        return {
          ...state,
          isLoading: false,
          error: '',
          decks: Object.values(entities.decks),
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
