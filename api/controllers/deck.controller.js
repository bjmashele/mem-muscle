const Deck = require("../models/deck.model.js");
const DeckService = require("../services/decks.service");

exports.findAll = (req, res) => {
  Deck.find()
    .then(decks => {
      res.send(decks);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving decks."
      });
    });
};

exports.createDeck = async function(req, res, next) {
  var deck = {
    title: req.body.title,
    description: req.body.description
  };

  try {
    let createdDeck = await DeckService.createDeck(deck);
    return res
      .status(201)
      .json({
        status: 201,
        data: createdDeck,
        message: `Successfully Created a ${deck.title} Deck.`
      });
  } catch (error) {
    return res
      .status(400)
      .json({ status: 400, message: "Deck creation was Unsuccessful" });
  }
};
