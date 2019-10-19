import React, { Component } from "react";
import { connect } from "react-redux";
import * as decksActions from "../actions/decksActions";

class CardList extends Component {
  // randomize cards
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      currentCard: "",
      showAnswer: false
    };
  }

  componentDidMount() {
    this.props.setCurrentCards(
      this.props.decks,
      this.props.cards,
      this.props.currentDeckId
    );
  }

  nextIndex = () => {
    // const newIndex = currentIndex + 1 < this.props.cards.length ? currentIndex++ : 0;
    const totalCurrentCards = this.props.currentCards.length;
    const currentIndex =
      this.state.currentIndex + 1 > totalCurrentCards - 1
        ? 0
        : this.state.currentIndex + 1;
    this.setState(state => ({
      currentIndex: currentIndex,
      showAnswer: false
    }));
  };

  prevIndex = () => {
    const totalCurrentCards = this.props.currentCards.length;
    const currentIndex =
      this.state.currentIndex - 1 < 0
        ? totalCurrentCards - 1
        : this.state.currentIndex - 1;
    this.setState(state => ({
      currentIndex: currentIndex,
      showAnswer: false
    }));
  };

  flipCard = () => {
    this.setState(state => ({
      showAnswer: !this.state.showAnswer
    }));
  };

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
    let cards = this.props.currentCards;
    // cards = this.randomizeCards(cards);

    return (
      <div className="card-list">
        <h3>Current index: {this.state.currentIndex}</h3>
        <div
          className="card-item box container"
          style={{ marginTop: "20vh", width: "35vw", height: "35vh" }}
        >
          <div className="card-text" style={{ width: "25vw", height: "5vw" }}>
            {this.state.showAnswer
              ? cards[this.state.currentIndex].back
              : cards[this.state.currentIndex].front}
          </div>
          {}
          <div
            className="card-flip"
            style={{ paddingLeft: "10vw", paddingRight: "10vw" }}
          >
            {/* <i className="fa fa-repeat" aria-hidden="true">
              flip
            </i> */}
            <div className="flip" onClick={this.flipCard}>
              flip
            </div>
          </div>
          <div className="controller" style={{ marginTop: "5vh" }}>
            <div
              className="button"
              onClick={this.nextIndex}
              style={{ marginRight: "13.5vw" }}
            >
              Next
            </div>
            <div className="button" onClick={this.prevIndex}>
              Prev
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    setCurrentCards: (decks, cards, currentDeckId) =>
      dispatch(decksActions.setCurrentCards(decks, cards, currentDeckId)),
    dispatch
  };
};
const mapStateToProps = state => ({
  cards: state.decksReducer.cards,
  decks: state.decksReducer.decks,
  currentDeckId: state.decksReducer.currentDeckId,
  currentCards: state.decksReducer.currentCards
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
