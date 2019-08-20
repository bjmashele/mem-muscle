import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { stat } from 'fs';
import DecksList from '../components/DecksList.jsx';
import CardsShowCase from '../containers/CardsShowCase';
import { data } from '../../mockData';
import * as decksActions from '../actions/decksActions';
import { DecksApi } from '../../api/decksApi';

// const data = [{ name: 1 }, { name: 'two' }];

class decksContainer extends Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  render() {
    console.log('in deck list', JSON.stringify(this.props.decks));

    if (this.props.isLoading) {
      return <div className="loading">Loading ...</div>;
    }

    if (this.props.error) {
      return (
        <div className="error" style={{ color: 'red' }}>
          ERROR:
          {' '}
          {JSON.stringify(this.props.error)}
        </div>
      );
    }
    return (
      <div>
        <DecksList decks={this.props.decks} cards={this.props.cards} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decksReducer.decks,
  cards: state.decksReducer.cards,
  isLoading: state.decksReducer.isLoading,
  error: state.decksReducer.error,
  currentDeckID: state.decksReducer.currentDeckID,
});

const mapDispatchToProps = {
  fetchDecks: decksActions.fetchDecks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(decksContainer);
