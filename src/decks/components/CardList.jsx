import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardList extends Component {
  // randomize cards

  randomizeCards(cards) {
    let i = 0;
    let j = 0;
    let temp = null;
    for (i - Array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    return cards;
  }

  render() {
    let { cards } = this.props;
    cards = this.randomizeCards(cards);

    return (
      <div className="card-list">
        <ul>
          {cards.map((card, index) => (
            <li className="card-item cell" key={index}>
              {card.front}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cards: state.decksReducer.currentCards,
});
export default connect(
  mapStateToProps,
  null,
)(CardList);
