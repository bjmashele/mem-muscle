const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3006;
// Create express app
const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

// Configure the database
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');

mongoose.Promise = global.Promise;

// Connect to the database

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Successfully connecte to the database');
  })
  .catch((err) => {
    console.log('Could not connect to the database. Exiting ...');
    process.exit();
  });

// Routes

// test route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Card deck microservice' });
});

// api routes

require('./app/routes/deck.routes.js')(app);

// Start server

app.listen(PORT, () => {
  console.log(`Card deck server is listening on port: ${PORT} `);
});
