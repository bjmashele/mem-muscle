import { normalize, schema } from 'normalizr';
import { DecksApi } from '../../api/decksApi';

// Action types
export const FETCH_DECKS_STARTED = 'FETCH_DECKS_STARTED';
export const FETCH_DECKS_FAILED = 'FETCH_DECKS_FAILED';
export const RECEIVE_ENTITIES = 'RECEIVE_ENTITIES';
export const FETCH_DECKS_SUCCEEDED = 'FETCH_DECKS_SUCCEEDED';

// normalize decks data

const card = new schema.Entity('cards');
const deck = new schema.Entity('decks', {
  cards: [card],
});

const deckList = [deck];
const deckNormalizer = deckResult => normalize(deckResult, deckList);

export const fetchDecks = () => (dispatch) => {
  dispatch(fetchDecksStarted());
  DecksApi.fetchDecks()
    .then(response => response.json())
    .then(data => deckNormalizer(data))
    .then(data => dispatch(receiveEntities(data)), error => dispatch(fetchDecksFailed(error)));
};

export function fetchDecksStarted() {
  return { type: FETCH_DECKS_STARTED };
}

export function fetchDecksFailed(error) {
  return { type: FETCH_DECKS_FAILED, error: error || 'Unexpected Error !!!' };
}

export function fetchDecksSucceeded(data) {
  return {
    type: FETCH_DECKS_SUCCEEDED,
    data,
  };
}

export function receiveEntities(entities) {
  return {
    type: RECEIVE_ENTITIES,
    payload: entities,
  };
}

// // normalize data
// const cardSchema = new schema.Entity('cards');
// const decksSchema = new schema.Entity('decks', {
//   cards: [cardSchema],
// });

// export function receiveEntities(entities) {
//   return {
//     type: RECEIVE_ENTITIES,
//     payload: entities,
//   };
// }

// export function fetchDecks() {
//   return (dispatch, getState) => DecksApi.fetchDecks()
//     .then((res) => {
//       const decks = res.data;
//       const normalizedData = normalize(decks, [decksSchema]);
//       dispatch(normalizedData);
//     })
//     .catch((err) => {
//       fetchDecksFailed(err);
//     });
// }
