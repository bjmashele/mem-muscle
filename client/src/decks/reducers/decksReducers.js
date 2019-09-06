import { fromJS } from "immutable";
import * as DecksActions from "../actions/decksActions";

const initialDecksState = {
  items: {},
  isLoading: false,
  error: " ",
  currentDeckId: "abs",
  currentCards: ["a", "b", "c"]
};

export default function decksReducer(state = initialDecksState, action) {
  switch (action.type) {
    case DecksActions.FETCH_DECKS_STARTED: {
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    }
    case DecksActions.FETCH_DECKS_SUCCEEDED: {
      return {
        ...state,
        items: action.payload.decks,
        isLoading: false
      };
    }
    case DecksActions.RECEIVE_ENTITIES: {
      const { entities } = action.payload;

      if (entities && entities.decks) {
        return {
          ...state,
          isLoading: false,
          entities: entities,
          error: "",
          currentDeckID: "",
          items: entities.decks
        };
      }
    }
    case DecksActions.FETCH_DECKS_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
    case DecksActions.SET_CURRENT_DECK_ID: {
      return {
        ...state,
        currentDeckId: action.payload.id
      };
    }
    case DecksActions.SET_CURRENT_CARDS: {
      return {
        ...state,
        currentCards: action.payload.currentCards
      };
    }
    default: {
      return state;
    }
  }
}

const getCardsByDeckId = state => {
  const { currentDeckId } = state.currentDeckId;

  if (!currentDeckId || !state.decks.items[currentDeckId]) {
    return [];
  }

  const cardIds = state.decks.items[currentDeckId].cards;

  return cardIds.map(id => state.cards.items[id]);
};
