import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DecksList from "../components/DecksList.jsx";

import * as decksActions from "../actions/decksActions";

class decksContainer extends Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  render() {
    if (this.props.isLoading) {
      return <div className="loading">Loading ...</div>;
    }

    if (this.props.error) {
      return (
        <div className="error" style={{ color: "red", textAlign: "center" }}>
          ERROR WHILE FETCHING DECKS FROM THE SERVER
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(decksContainer);
