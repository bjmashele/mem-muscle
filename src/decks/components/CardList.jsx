import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardList extends Component {
  // randomize cards
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      currentCard: '',
      showAnswer: false,
    };
  }

  nextIndex(currentIndex) {
    // const newIndex = currentIndex + 1 < this.props.cards.length ? currentIndex++ : 0;
    this.setState({ showAnswer: false });
    this.setState({ currentIndex: currentIndex++ });
  }

  prevIndex(currentIndex) {
    this.setState({ currentIndex: currentIndex-- });
  }

  showAnswer(e) {
    this.setState({ showAnswer: !this.state.showAnswer });
    e.stopPropagation();
  }

  randomizeCards(cards) {
    let i = 0;
    let j = 0;
    let temp = null;
    for (i = cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    return cards;
  }

  render() {
    const { cards } = this.props;
    // cards = this.randomizeCards(cards);

    return (
      <div className="card-list">
        <div
          className="card-item box container"
          style={{ marginTop: '20vh', width: '35vw', height: '35vh' }}
        >
          <div className="card-text" style={{ width: '25vw', height: '5vw' }}>
            {/* {this.state.showAnswer
              ? cards[this.state.currentIndex].back
              : cards[this.state.currentIndex].front} */}
            {cards[this.state.currentIndex].back}
          </div>
          {}
          <div className="card-flip" style={{ paddingLeft: '10vw', paddingRight: '10vw' }}>
            {/* <i className="fa fa-repeat" aria-hidden="true">
              flip
            </i> */}
            <div className="flip" onClick={e => this.showAnswer()}>
              flip
            </div>
          </div>
          <div className="controller" style={{ marginTop: '5vh' }}>
            <div
              className="button"
              onClick={() => this.nextIndex(this.state.currentIndex)}
              style={{ marginRight: '13.5vw' }}
            >
              Next
            </div>
            <div className="button" onClick={() => this.prevIndex(this.state.currentIndex)}>
              Prev
            </div>
          </div>
        </div>
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
