//import { normalize, schema } from "normalizr";
import { DecksApi } from "../../api/decksApi";
import * as DeckNormalizer from "../normalizers/decksNormalizer.js";

// Action types
export const FETCH_DECKS_STARTED = "FETCH_DECKS_STARTED";
export const FETCH_DECKS_FAILED = "FETCH_DECKS_FAILED";
export const RECEIVE_ENTITIES = "RECEIVE_ENTITIES";
export const FETCH_DECKS_SUCCEEDED = "FETCH_DECKS_SUCCEEDED";
export const SET_CURRENT_DECK_ID = "SET_CURRENT_DECK_ID";
export const GET_CARDS = "GET_CARDS";
export const SET_CURRENT_CARDS = "SET_CURRENT_CARDS";

export const ADD_DECK_STARTED = "ADD_DECK_STARTED";
export const ADD_DECK_SUCCEEDED = "ADD_DECK_SUCCEEDED";
export const ADD_DECK_FAILED = "ADD_DECK_FAILED";

export const ADD_CARDS_STARTED = "ADD_CARD_STARTED";
export const ADD_CARDS_SUCCEEDED = "ADD_CARD_SUCCEEDED";
export const ADD_CARDS_FAILED = "ADD_CARDS_FAILED";

export function fetchDecksStarted() {
  return {
    type: FETCH_DECKS_STARTED
  };
}

export function fetchDecksFailed(error) {
  return {
    type: FETCH_DECKS_FAILED,
    payload: {
      error: error || "Unexpected Error !!!"
    }
  };
}

export function fetchDecksSucceeded(data) {
  return {
    type: FETCH_DECKS_SUCCEEDED,
    payload: {
      decks: data
    }
  };
}

export function receiveEntities(entities) {
  return {
    type: RECEIVE_ENTITIES,
    payload: entities
  };
}

export function fetchDecks() {
  return (dispatch, getState) => {
    dispatch(fetchDecksStarted());

    return DecksApi.fetchDecks()
      .then(resp => {
        const decks = resp.data;
        const normalizedData = DeckNormalizer.normalizeDecks(decks);
        dispatch(receiveEntities(normalizedData));
      })
      .catch(err => {
        dispatch({ type: FETCH_DECKS_FAILED, error: err.message });
      });
  };
}

export function setCurrentDeckId(id) {
  return {
    type: SET_CURRENT_DECK_ID,
    payload: {
      id
    }
  };
}

export function setCurrentCards(decks, cards, currentDeckId) {
  let deckCardIds = () => {
    const deckById = decks.filter(deck => {
      return deck.id === currentDeckId;
    });

    return deckById[0].cards;
  };

  console.log("card ids", deckCardIds());
  console.log("All cards:", cards);
  const cardIds = deckCardIds();

  let deckCards = cards.filter(card => {
    return cardIds.includes(card.id);
  });

  return {
    type: SET_CURRENT_CARDS,
    payload: {
      currentCards: deckCards
    }
  };
}
export function getCards(deckID) {
  return {
    type: GET_CARDS
  };
}

export function addDeckStarted() {
  return {
    type: ADD_DECK_STARTED
  };
}

export function addDeckFailed(error) {
  return {
    type: ADD_DECK_FAILED,
    payload: {
      error: error || "Unexpected Error While Adding Deck"
    }
  };
}

export function addDeckSucceeded(data) {
  return {
    type: ADD_DECK_SUCCEEDED,
    payload: {
      deck: data
    }
  };
}

export const addDeck = (formProps, callback) => dispatch => {
  dispatch(addDeckStarted);
  console.log("In add-deck action", formProps);
  DecksApi.addDeck(formProps).then(res => dispatch(addDeckSucceeded(res.data)));
  callback();
};

export function addCardsStarted() {
  return {
    type: ADD_CARDS_STARTED
  };
}

export function addCardsFailed(error) {
  return {
    type: ADD_CARDS_FAILED,
    payload: {
      error: error || "Unexpected Error While Adding Deck"
    }
  };
}

export function addCardsSucceeded(data) {
  return {
    type: ADD_CARDS_SUCCEEDED,
    payload: {
      deck: data
    }
  };
}

export const addCard = (formProps, callback) => dispatch => {
  console.log("in add card action formProps: ", formProps);
  dispatch(addCardsStarted);
  console.log("in add card action");
  DecksApi.addCard(formProps).then(res =>
    dispatch(addCardsSucceeded(res.data))
  );
  callback();
};
