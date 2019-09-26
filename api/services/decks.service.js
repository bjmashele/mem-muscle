const mongoose = require("mongoose");
const Deck = require("../models/deck.model");

exports.createDeck = async function(deck) {
  let newDeck = new Deck({
    title: deck.title,
    description: deck.description,
    id: mongoose.Types.ObjectId(),
    cards: deck.cards,
    createdAt: new Date()
  });

  try {
    let savedDeck = await newDeck.save();
    return savedDeck;
  } catch (error) {
    throw Error(`Error while creating Deck`);
  }
};

exports.addCard = async function(card, deckID) {
  let newCard = {
    question: card.question,
    answer: card.answer,
    id: mongoose.Types.ObjectId(),
    createdAt: new Date()
  };

  try {
    let savedCard = await Deck.findOneAndUpdate(
      { id: deckID },
      { $push: { cards: newCard } }
    );
    return savedCard;
  } catch (error) {
    throw Error("Error while adding a new card");
  }
};
