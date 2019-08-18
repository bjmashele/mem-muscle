module.exports = (app) => {
  const decks = require('../controllers/deck.controller.js');

  app.get('/decks', decks.findAll);
};
