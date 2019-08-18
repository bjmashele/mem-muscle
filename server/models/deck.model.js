const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define our model
const cardSchema = new Schema({
  id: ObjectId,
  front: String,
  back: String,
});

const deckSchema = new Schema({
  name: String,
  id: ObjectId,
  cards: [cardSchema],
});

// Create the model class
const ModelClass = mongoose.model('Deck', deckSchema);

// Export the model
module.exports = ModelClass;
