const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 5000;

// Create express app
const app = express();

//Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

// Enable CORS
app.use(cors());
// Configure the database
const mongoose = require("mongoose");
const dbConfig = require("./config/database.config.js");

mongoose.Promise = global.Promise;

// Connect to the database

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting ...");
    process.exit();
  });

// Routes

// test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Card deck microservice" });
});

// api routes

require("./api/routes/deck.routes.js")(app);

// Start server

app.listen(PORT, () => {
  console.log(`Card deck server is listening on port: ${PORT} `);
});
