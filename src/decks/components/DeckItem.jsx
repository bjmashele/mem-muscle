import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CardList from './CardList';
import decksReducer from '../reducers/decksReducers';
import * as decksActions from '../actions/decksActions';

class DeckItem extends Component {
  chooseDeck(deckID, cards, cardIDsFromDeck) {
    this.props.setDeck(deckID);
    this.props.setCurrentCards(cards, cardIDsFromDeck);
  }

  consoleLogCards(cardIDsFromDeck) {
    const cardToLog = this.filterCards(cardIDsFromDeck) || 'error on filters cards';
    console.log('cards: ', cardToLog);
  }

  render() {
    const { name } = this.props;
    const cardIDsFromDeck = this.props.deck.cards;
    const { cards } = this.props;
    const deckID = this.props.deck.id;

    return (
      <div className="card" style={{ marginBottom: '15px' }}>
        <div className="card-content title is-4" style={{ textAlign: 'center' }}>
          {name}
        </div>
        <div className="card-image">
          <figure className="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image" />
          </figure>
        </div>
        <Link to="/card-list">
          <div
            className="study button is-medium is-warning"
            style={{ width: '25vw', marginLeft: '37.5vw', marginRight: '37.5vw' }}
            onClick={() => this.chooseDeck(deckID, cards, cardIDsFromDeck)}
          >
            Study!
          </div>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setDeck: decksActions.setDeck,
  setCurrentCards: decksActions.setCurrentCards,
};
export default connect(
  null,
  mapDispatchToProps,
)(DeckItem);
