import React, { Component } from "react";
import { connect } from "react-redux";
import * as decksActions from "../actions/decksActions";
import AddCardForm from "./AddCardForm";
import history from "../../history";

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
        history.push("/add-card");
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
    this.setState({
      currentIndex: currentIndex,
      showAnswer: false
    });
  };

  prevIndex = () => {
    const totalCurrentCards = this.props.currentCards.length;
    const currentIndex =
      this.state.currentIndex - 1 < 0
        ? totalCurrentCards - 1
        : this.state.currentIndex - 1;
    this.setState({
      currentIndex: currentIndex,
      showAnswer: false
    });
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

  renderNavigationControls() {
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
    console.log("In card list, cards: ", cards);
    return (
      <div className="container card-list">
        <div className="subtitle is-centered">Deck Title</div>
        <div className="columns is-centered">
          <button
            className="button is-warning"
            onClick={() => this.toggleModal()}
            style={{
              paddingBottom: "3vh"
            }}
          >
            Add Card
          </button>
        </div>
        <div
          className="card-item box container"
          style={{
            marginTop: "5vh",
            width: "35vw",
            height: "35vh"
          }}
        >
          <div
            className="card-text"
            style={{
              height: "25vh",
              textAlign: "center",
              verticalAlign: "middle"
            }}
          >
            {this.state.showAnswer
              ? cards[this.state.currentIndex].question
              : cards[this.state.currentIndex].answer}
          </div>
          {}
          <div
            className="card-flip"
            style={{ paddingLeft: "15vw", paddingRight: "15vw" }}
          >
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
          {this.renderNavigationControls()}
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
