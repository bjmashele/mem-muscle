import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import requireAuth from "../auth/components/requireAuth";
import * as decksActions from "../decks/actions/decksActions";

class TestComponent extends Component {
  constructor() {
    super();
    this.state = {
      decks: []
    };
  }

  componentDidMount() {
    this.props.fetchDecks();
  }

  render() {
    return (
      <div className="test-comp">
        <h2>This a Test Component: Decks</h2>
        <div className="deckss">Test</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  decks: state.decksReducer.decks;
};

const mapDispatchToProps = {
  fetchDecks: decksActions.fetchDecks
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(requireAuth(TestComponent));
