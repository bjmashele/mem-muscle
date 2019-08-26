import { HttpClient } from "./httpClient";

// This is the API. The backend root URL can be set from here.

//const API = "api/decks";

// Setting the decks URI

// const DECKS_API = `${API}/decks`;
// Use json-server
const DECKS_API = "http://localhost:5000/api/decks";
//const DECKS_API = "/api/decks";
// Get card decks
// const fetchDecks = () => HttpClient.get(DECKS_API);
const fetchDecks = () =>
  fetch(DECKS_API, {
    method: "GET"
  });
// test
// const assets = fetchDecks().then(res => console.log('In decks API: ', res.data));
const DecksApi = { fetchDecks };

export { DecksApi };
