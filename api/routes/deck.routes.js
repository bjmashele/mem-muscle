module.exports = app => {
  const decks = require("../controllers/deck.controller.js");

  //Card deck routes
  app.get("/api/decks", decks.findAll);
};
