import React, { Component } from "react";
import { connect } from "react-redux";
import * as decksActions from "../actions/decksActions";
import AddCardForm from "./AddCardForm";

class CardList extends Component {
  // randomize cards
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      currentCard: "",
      showAnswer: false,
      modalState: ""
    };
  }

  componentDidMount() {
    this.props.setCurrentCards(
      this.props.decks,
      this.props.cards,
      this.props.currentDeckId
    );
  }

  toggleModal = () => {
    const modalProp = () => {
      if (this.state.modalState == " ") {
        return "is-active";
      } else {
        return " ";
      }
    };
    this.setState({ modalState: modalProp() });
  };
  showModal() {
    this.setState({ modalState: "is-active" });
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

  renderPrevNextCardControls() {
    return (
      <div className="controller">
        <div
          className="button"
          style={{ marginRight: "130px" }}
          onClick={this.nextIndex}
        >
          Next
        </div>
        <div className="button" onClick={this.prevIndex}>
          Prev
        </div>
      </div>
    );
  }
  render() {
    let cards = this.props.currentCards;
    // cards = this.randomizeCards(cards);

    return (
      <div className="card-list">
        <div
          className="card-item box container"
          style={{
            marginTop: "20vh",
            width: "35vw",
            height: "35vh",
            zIndex: 5
          }}
        >
          <button
            className="button is-warning"
            onClick={() => this.toggleModal()}
            style={{
              paddingBottom: "5vh"
            }}
          >
            Add Card
          </button>
          <div
            className="card-text"
            style={{
              height: "20vw",
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "25vh"
            }}
          >
            {this.state.showAnswer
              ? cards[this.state.currentIndex].back
              : cards[this.state.currentIndex].front}
          </div>
          {}
          <div
            className="card-flip"
            style={{ paddingLeft: "15vw", paddingRight: "15vw" }}
          >
            {/* <i className="fa fa-repeat" aria-hidden="true">
              flip
            </i> */}
            <div className="flip" onClick={this.flipCard}>
              <i
                className="fa fa-repeat"
                style={{ fontSize: "35px", color: "gold" }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "2vh", width: "25vw" }}>
          {this.renderPrevNextCardControls()}
        </div>

        <div className="add-deck-modal">
          {this.state.modalState == "is-active" ? (
            <div>
              <AddCardForm
                onToggleModal={() => this.toggleModal}
                modalState={this.state.modalState}
                deckID={this.props.currentDeckId}
              />
            </div>
          ) : (
            " "
          )}
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
