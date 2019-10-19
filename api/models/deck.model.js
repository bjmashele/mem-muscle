const mongoose = require("mongoose");
const ObjectID = require("bson-objectid");

const { Schema } = mongoose;

// Define our model
const cardSchema = new Schema({
  id: Schema.Types.ObjectId,
  question: String,
  answer: String
});

const deckSchema = new Schema({
  title: String,
  id: Schema.Types.ObjectId,
  //description: String,
  createdAt: Date,
  cards: [cardSchema]
});

// Create the model class
const ModelClass = mongoose.model("Deck", deckSchema);

// Export the model
module.exports = ModelClass;
