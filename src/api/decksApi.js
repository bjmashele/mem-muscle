import { HttpClient } from './httpClient';

// This is the API. The backend root URL can be set from here.

const API = 'http://localhost:3030/api';

// Setting the decks URI

// const DECKS_API = `${API}/decks`;
// Use json-server
const DECKS_API = 'http://localhost:3035/decks';
// Get card decks
// const fetchDecks = () => HttpClient.get(DECKS_API);
const fetchDecks = () => fetch(DECKS_API, {
  method: 'GET',
});
// test
// const assets = fetchDecks().then(res => console.log('In decks API: ', res.data));
const DecksApi = { fetchDecks };

export { DecksApi };
