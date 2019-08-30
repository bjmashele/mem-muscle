import React, { Component } from "react";
import Deck from "./Deck";
import CardList from "./CardList";
import { Container, Row, Col } from "react-grid";

const cellStyle = {
  borderStyle: "solid",
  height: "25vh",
  margin: "5px"
};

class DecksList extends Component {
  render() {
    const decks = this.props.decks;
    // const { cards } = this.props.cards;
    // const { currentDeckID } = this.props.currentDeckID;

    const renderDecks = () => (
      <div className="container has-gutter-top-bottom">
        <h3>Current Deck Id: {this.props.currentDeckId}</h3>
        <div className="columns is-multiline">
          {decks.slice(0, 5).map(deck => (
            <div className="column is-4">
              <Deck deck={deck} />
            </div>
          ))}
        </div>
        {/* <ul className="menu-list">
          {decks.map((deck, index) => (
            <li className="deck" key={index}>
              <DeckItem deck={deck} cards={cards} />
            </li>
          ))}
        </ul> */}
        {/* <div className="rawdecks">{JSON.stringify(decks)}</div> */}
        {/* <Container>
          <Row>
            <Col style={cellStyle}>
              <Deck deck={decks[0]} />
            </Col>
            <Col style={cellStyle}>
              <Deck deck={decks[1]} />
            </Col>
            <Col style={cellStyle}>
              <Deck deck={decks[2]} />
            </Col>
          </Row>

          <Row>
            <Col style={cellStyle}>
              <Deck deck={decks[3]} />
            </Col>
            <Col style={cellStyle}>
              <Deck deck={decks[4]} />
            </Col>
            <Col style={cellStyle}>
              <Deck deck={decks[5]} />
            </Col>
          </Row>

          <Row>
            <Col style={cellStyle}>
              <Deck deck={decks[6]} />
            </Col>
            <Col style={cellStyle}>
              <Deck deck={decks[7]} />
            </Col>
            <Col style={cellStyle}>
              <Deck deck={decks[8]} />
            </Col>
          </Row>
        </Container> */}
      </div>
    );
    return renderDecks();
  }
}

export default DecksList;
