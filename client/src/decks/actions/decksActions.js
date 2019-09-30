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

export const fetchDecks = () => dispatch => {
  dispatch(fetchDecksStarted());

  DecksApi.fetchDecks()
    //.then(response => response.json())
    .then(
      data => dispatch(receiveEntities(DeckNormalizer.normalizeDecks(data))),
      error => dispatch({ type: FETCH_DECKS_FAILED, error: error.message })
    );
};

export function setCurrentDeckId(id) {
  return {
    type: SET_CURRENT_DECK_ID,
    payload: {
      id
    }
  };
}

export function setCurrentCards(cards, cardIDsFromDeck) {
  console.log("currentCards action: ", cardIDsFromDeck);
  let deckCards = cardIDsFromDeck.map(
    cardID => cards.filter(card => card.id == cardID)[0]
  );

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

export const addDeck = formProps => dispatch => {
  dispatch(addDeckStarted);

  DecksApi.addDeck(formProps).then(res => dispatch(addDeckSucceeded(res.data)));
};
