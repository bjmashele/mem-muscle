import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CardList from "./CardList";
import decksReducer from "../reducers/decksReducers";
import * as decksActions from "../actions/decksActions";

class Deck extends Component {
  // onButtonClick = id => this.props.onChoose(id);
  render() {
    return (
      <div
        className="deck box"
        style={{
          minWidth: "250px",
          maxWidth: "300px",
          minHeight: "20vh"
        }}
        onClick={() => this.props.setCurrentDeckId(this.props.deck.id)}
      >
        <div
          className="subtitle"
          style={{ fontWeight: "bold", textAlign: "center" }}
        >
          {this.props.deck.title}
        </div>
        <hr />
        <div style={{ textAlign: "left" }}>
          Number of cards: {this.props.deck.cards.length}
        </div>

        <br />
        <div style={{ alignContent: "center", textDecoration: "none" }}>
          <Link to="/card-list">
            {/* <span style={{ textAlign: "center" }}> Study Deck</span> */}
            <div className="button is-dark is-outlined">Study Deck</div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentDeckId: id => dispatch(decksActions.setCurrentDeckId(id)),
    dispatch
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Deck);
