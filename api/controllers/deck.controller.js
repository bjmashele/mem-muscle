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
  let card = {
    question: req.body.question,
    answer: req.body.answer
  };
  var deck = {
    title: req.body.title,
    //description: req.body.description,
    cards: card
  };

  console.log("In controller: ", deck.title);

  try {
    let createdDeck = await DeckService.createDeck(deck);
    return res.status(201).json({
      status: 201,
      data: createdDeck,
      message: "Successfully Created a Deck."
    });
  } catch (error) {
    return res
      .status(400)
      .json({ status: 400, message: "Deck creation was Unsuccessful" });
  }
};

exports.addCard = async function(req, res, next) {
  let card = {
    question: req.body.question,
    answer: req.body.answer,
    deckID: req.body.deckID || "unknown deckID"
  };
  // const deckID = req.body._id;
  console.log("AddCard Controller card: ", card);
  console.log("AddCard Controller req body: ", req);
  try {
    let addedCard = await DeckService.addCard(card);
    return res.status(201).json({
      status: 201,
      data: addedCard,
      message: "Successfully added a card"
    });
  } catch (error) {
    return res
      .status(400)
      .json({ status: 400, message: "Card addition was Unsuccessful" });
  }
};
