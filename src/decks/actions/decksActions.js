import { normalize, schema } from 'normalizr';
import { DecksApi } from '../../api/decksApi';

// Action types
export const FETCH_DECKS_STARTED = 'FETCH_DECKS_STARTED';
export const FETCH_DECKS_FAILED = 'FETCH_DECKS_FAILED';
export const RECEIVE_ENTITIES = 'RECEIVE_ENTITIES';

export function fetchDecksStarted(decks) {
  return { type: FETCH_DECKS_STARTED, payload: { decks } };
}

export function fetchDecksFailed(err) {
  return { type: FETCH_DECKS_FAILED, payload: err };
}

// normalize data
const cardSchema = new schema.Entity('cards');
const decksSchema = new schema.Entity('decks', {
  cards: [cardSchema],
});

export function receiveEntities(entities) {
  return {
    type: RECEIVE_ENTITIES,
    payload: entities,
  };
}

export function fetchDecks() {
  return (dispatch, getState) => {
    dispatch(fetchDecksStarted());

    return DecksApi.fetchDecks()
      .then((res) => {
        const decks = res.data;
        const nomalizedData = normalize(projects, [projectSchema]);
        dispatch(receiveEntities(normalizedData));
      })
      .catch((err) => {
        fetchDecksFailed(err);
      });
  };
}
