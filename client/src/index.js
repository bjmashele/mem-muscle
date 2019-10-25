import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import history from "./history";

import App from "./App";
import Welcome from "./auth/components/Welcome";
import Signup from "./auth/components/auth/Signup";
import Decks from "./decks/components/Decks.jsx";
import CardList from "./decks/components/CardList";
import Signout from "./auth/components/auth/Signout";
import Signin from "./auth/components/auth/Signin";
import CardCollection from "./decks/components/CardCollection";
import AddDeckForm from "./decks/components/AddDeckForm";

// css styles
import "./App.css";
import "bulma/css/bulma.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { configureStore } from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App style={{ backgroundColor: "red" }}>
        <Route path="/" exact component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Decks} />
        <Route path="/study" component={CardCollection} />
        <Route path="/card-list" component={CardList} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
        <Route path="/add-deck" component={Decks} />
        <Route path="/add-card" component={CardList} />
        <Route path="/deck-list" component={Decks} />
      </App>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
