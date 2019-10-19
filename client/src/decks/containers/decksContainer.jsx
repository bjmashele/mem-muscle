import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { stat } from "fs";
import DecksList from "../components/DecksList.jsx";
import CardsShowCase from "./CardsShowCase";

import * as decksActions from "../actions/decksActions";
import { DecksApi } from "../../api/decksApi";

// const data = [{ name: 1 }, { name: 'two' }];

class decksContainer extends Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  // onChooseDeckToStudy = id => {
  //   this.props.dispatch({ type: "SET_CURRENT_DECK_ID", payload: id });
  // };
  render() {
    if (this.props.isLoading) {
      return <div className="loading">Loading ...</div>;
    }

    if (this.props.error) {
      return (
        <div className="error" style={{ color: "red" }}>
          ERROR
          {/* ERROR: {JSON.stringify(this.props.error)} */}
        </div>
      );
    }
    return (
      <div>
        <DecksList
          decks={this.props.decks}
          onChooseDeckToStudy={this.props.onChooseDeckToStudy}
          currentDeckId={this.props.currentDeckId}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decksReducer.decks,
  currentDeckId: state.decksReducer.currentDeckId,
  isLoading: state.decksReducer.isLoading,
  error: state.decksReducer.error
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(decksActions.fetchDecks()),
  onChooseDeckToStudy: id => dispatch(decksActions.setCurrentDeckId(id)),
  dispatch
});

// const mapDispatchToProps = dispatch => ({
//   fetchDecks: decksActions.fetchDecks,
//   setCurrentDeckId: decksActions.setCurrentDeckId,
//   dispatch: dispatch
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(decksContainer);
