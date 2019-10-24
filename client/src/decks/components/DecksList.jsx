import React, { Component } from "react";
import { reduxForm } from "redux-form";
import Deck from "./Deck";
import CardList from "./CardList";
import AddDeckForm from "./AddDeckForm";
import TestModal from "./TestModal";
import { Container, Row, Col } from "react-grid";

const cellStyle = {
  borderStyle: "solid",
  height: "25vh",
  margin: "5px"
};

class DecksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: " "
    };
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

  render() {
    const decks = this.props.decks;
    const currentDeckId = this.props.currentDeckId;

    const renderDecks = () => (
      <div className="container has-gutter-top-bottom">
        <button
          className="button is-link "
          onClick={() => this.toggleModal()}
          style={{
            marginLeft: "73.5vw",
            marginBottom: "2vh"
          }}
        >
          Add Deck
        </button>
        <div className="columns is-multiline">
          {decks.slice(0, 8).map(deck => (
            <div className="column is-4">
              <Deck deck={deck} />
            </div>
          ))}
        </div>
        <div className="add-deck-modal">
          {this.state.modalState == "is-active" ? (
            <div>
              <AddDeckForm
                onToggleModal={() => this.toggleModal}
                modalState={this.state.modalState}
              />
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    );
    return renderDecks();
  }
}

export default DecksList;
