const Deck = require('../models/deck.model.js');

exports.findAll = (req, res) => {
  Deck.find()
    .then((decks) => {
      res.send(decks);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error occurred while retrieving decks.',
      });
    });
};