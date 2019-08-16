import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardList extends Component {
  // randomize cards

  render() {
    const { cards } = this.props;
    const cardList = cards;
    console.log('in card list: ', JSON.stringify(cards));
    return (
      <div className="card-list">
        <ul>
          {cardList.map((card, index) => (
            <li className="card-item" key={index}>
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
