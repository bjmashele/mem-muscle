import React, { Component } from 'react';
import DeckItem from './DeckItem';
import CardList from './CardList';

class DecksList extends Component {
  render() {
    const { decks } = this.props;
    const { cards } = this.props;
    const { currentDeckID } = this.props;

    const renderDecks = () => (
      <div>
        <ul className="menu-list">
          {decks.map((deck, index) => (
            <li className="deck" key={index}>
              <DeckItem deck={deck} cards={cards} />
            </li>
          ))}
        </ul>
      </div>
    );
    return currentDeckID ? ' ' : renderDecks();
  }
}

export default DecksList;
