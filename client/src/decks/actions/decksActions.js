import { normalize, schema } from 'normalizr';
import { DecksApi } from '../../api/decksApi';

// Action types
export const FETCH_DECKS_STARTED = 'FETCH_DECKS_STARTED';
export const FETCH_DECKS_FAILED = 'FETCH_DECKS_FAILED';
export const RECEIVE_ENTITIES = 'RECEIVE_ENTITIES';
export const FETCH_DECKS_SUCCEEDED = 'FETCH_DECKS_SUCCEEDED';
export const SET_CURRENT_DECK = 'SET_CURRENT_DECK';
export const GET_CARDS = 'GET_CARDS';
export const SET_CURRENT_CARDS = 'SET_CURRENT_CARDS';

// normalize decks data

const card = new schema.Entity('cards');
const deck = new schema.Entity('decks', {
  cards: [card],
});

const deckList = [deck];
const deckNormalizer = deckResult => normalize(deckResult, deckList);

export function fetchDecksStarted() {
  return {
    type: FETCH_DECKS_STARTED,
  };
}

export function fetchDecksFailed(error) {
  return {
    type: FETCH_DECKS_FAILED,
    payload: {
      error: error || 'Unexpected Error !!!',
    },
  };
}

export function fetchDecksSucceeded(data) {
  return {
    type: FETCH_DECKS_SUCCEEDED,
    payload: {
      decks: data,
    },
  };
}

export function receiveEntities(entities) {
  return {
    type: RECEIVE_ENTITIES,
    payload: entities,
  };
}

export const fetchDecks = () => (dispatch) => {
  dispatch(fetchDecksStarted());

  DecksApi.fetchDecks()
    .then(response => response.json())
    .then(
      data => dispatch(fetchDecksSucceeded(data)),
      // data => dispatch(receiveEntities(deckNormalizer(data))),
      error => dispatch({ type: FETCH_DECKS_FAILED, error: error.message }),
    );
};

export function setDeck(deckID) {
  return {
    type: SET_CURRENT_DECK,
    payload: {
      deckID,
    },
  };
}

export function setCurrentCards(cards, cardIDsFromDeck) {
  const deckCards = cardIDsFromDeck.map(cardID => cards.filter(card => card.id == cardID)[0]);
  console.log('currentCards action: ', deckCards);
  return {
    type: SET_CURRENT_CARDS,
    payload: {
      currentCards: deckCards,
    },
  };
}
export function getCards(deckID) {
  return {
    type: GET_CARDS,
  };
}