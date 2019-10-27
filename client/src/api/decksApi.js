import { HttpClient } from "./httpClient";

// This is the API. The backend root URL can be set from here.

//const API = "api/decks";

// Setting the decks URI

// const DECKS_API = `${API}/decks`;
// Use json-server
const DECKS_API = "/api/decks";
//const DECKS_API = "/api/decks";
// Get card decks
const fetchDecks = () => HttpClient.get(DECKS_API);
const addDeck = data => HttpClient.post(DECKS_API, data);
const addCard = card => {
  console.log("In add card api: card  :", card);
  return HttpClient.put(`${DECKS_API}/addCard`, card);
};

const DecksApi = { fetchDecks, addDeck, addCard };

export { DecksApi };
