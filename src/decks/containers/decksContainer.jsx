import React, { Component } from 'react';
import DecksList from '../components/DecksList.jsx';
import { data } from '../../mockData';

// const data = [{ name: 1 }, { name: 'two' }];
console.log(JSON.stringify(data));
class decksContainer extends Component {
  state = {
    toggle: false,
  };

  render() {
    return (
      <div>
        <DecksList decks={data.decks} />
      </div>
    );
  }
}

export default decksContainer;
