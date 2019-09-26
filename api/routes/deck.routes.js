module.exports = app => {
  const decks = require("../controllers/deck.controller.js");

  //Card deck routes
  app.get("/api/decks", decks.findAll);
  app.post("/api/decks", decks.createDeck);
  app.put(`/api/decks/addCard`, decks.addCard);
};
