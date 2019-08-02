import { HttpClient } from './httpClient';

// This is the API. The backend root URL can be set from here.

const API = 'http://localhost:3030/api';

// Setting the decks URI

// const DECKS_API = `${API}/decks`;
// Use json-server
const DECKS_API = 'http://localshost:3035';
// Get card decks
const fetchDecks = () => HttpClient.get('DECKS_API/decks');
const DecksApi = { fetchDecks };

export { DecksApi };
