let Deck = require("../models/deck.model");

exports.createDeck = async function(deck) {
  let newDeck = new Deck({
    title: deck.title,
    description: deck.description,
    id: ObjectId(),
    createdAt: new Date()
  });

  try {
    let savedDeck = await newDeck.save();
    return savedDeck;
  } catch (error) {
    throw Error(`Error while creating Deck`);
  }
};
