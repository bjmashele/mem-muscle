import React from 'react';
import DeckItem from './DeckItem';

const DecksList = ({ decks }) => (
  <ul className="menu-list">
    {console.log(decks)}
    {JSON.stringify(decks)}
    {/* {decks.map((deck, index) => (
      <li className="deck" key={index}>
        <DeckItem name={deck.name} img={deck.img} />
      </li>
    ))} */}
  </ul>
);

export default DecksList;
