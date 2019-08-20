import { fromJS } from 'immutable';
import * as DecksActions from '../actions/decksActions';

const initialDecksState = {
  decks: [],
  cards: [],
  currentCards: [],
  isLoading: false,
  error: null,
  currentDeckID: null,
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
          currentDeckID: null,
          decks: Object.values(entities.decks),
          cards: Object.values(entities.cards),
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
    case DecksActions.SET_CURRENT_DECK: {
      return {
        ...state,
        currentDeckID: action.payload.deckID,
      };
    }
    case DecksActions.SET_CURRENT_CARDS: {
      return {
        ...state,
        currentCards: action.payload.currentCards,
      };
    }
    default: {
      return state;
    }
  }
}
