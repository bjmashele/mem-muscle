import React from 'react';
import DeckItem from './DeckItem';

const DecksList = props => (
  <ul className="menu-list">
    {props.decks.map((deck, index) => (
      <li className="deck" key={index}>
        <DeckItem name={deck.name} />
      </li>
    ))}
  </ul>
);

export default DecksList;
