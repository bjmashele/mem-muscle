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
        style={{ textAlign: "center", width: "20vw", height: "20vh" }}
        onClick={() => this.props.setCurrentDeckId(this.props.deck.id)}
      >
        <ul>
          <li>
            {this.props.deck.title}
            <hr />
            Cards: {this.props.deck.cards.length}
            <br />
            <Link to="/card-list">
              <span> Study Deck</span>
            </Link>
          </li>
        </ul>
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
