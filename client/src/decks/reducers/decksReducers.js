import { fromJS } from "immutable";
import * as DecksActions from "../actions/decksActions";

const initialDecksState = {
  items: [],
  decks: {},
  isLoading: false,
  error: " ",
  currentDeckId: "abs",
  currentCards: [
    { front: "a", back: "1" },
    { front: "b", back: "2" },
    { front: "c", back: "3" }
  ]
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
          decks: Object.values(entities.decks),
          cards: Object.values(entities.cards)
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
    case DecksActions.ADD_DECK_STARTED: {
      return {
        ...state
      };
    }
    case DecksActions.ADD_DECK_SUCCEEDED: {
      return {
        ...state,
        decks: state.decks.concat(action.payload.deck)
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
