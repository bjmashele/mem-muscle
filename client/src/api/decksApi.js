import { HttpClient } from "./httpClient";

const DECKS_API = "https://limitless-river-84405.herokuapp.com/api/decks";

const fetchDecks = () => HttpClient.get(DECKS_API);
const addDeck = data => HttpClient.post(DECKS_API, data);
const addCard = card => {
  return HttpClient.put(`${DECKS_API}/addCard`, card);
};

const DecksApi = { fetchDecks, addDeck, addCard };

export { DecksApi };
