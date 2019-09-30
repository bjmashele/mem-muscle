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
        {console.log("Deck ID: ", this.props.deck.id)}
        <ul>
          <li>
            <Link to="/card-list">
              {this.props.deck.name}
              <hr />
              {this.props.deck.id}
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
