import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CardList from "./CardList";
import decksReducer from "../reducers/decksReducers";
import * as decksActions from "../actions/decksActions";

class Deck extends Component {
  render() {
    return (
      <div
        className="deck box"
        style={{ textAlign: "center", width: "20vw", height: "20vh" }}
      >
        {this.props.deck.name}
        <hr />
        {this.props.deck.id}
      </div>
    );
  }
}

export default Deck;
