import React, { Component } from "react";
import DeckItem from "./DeckItem";
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
    //const { cards } = this.props.cards;
    //const { currentDeckID } = this.props.currentDeckID;

    const renderDecks = () => (
      <div>
        {/* <ul className="menu-list">
          {decks.map((deck, index) => (
            <li className="deck" key={index}>
              <DeckItem deck={deck} cards={cards} />
            </li>
          ))}
        </ul> */}
        <Container>
          <Row>
            <Col style={cellStyle}>
              {decks[0].name}
              {/* <DeckItem deck={decks[0]} cards={cards} /> */}
            </Col>
            <Col style={cellStyle}>
              {decks[1].name}
              {/* <DeckItem deck={decks[1]} cards={cards} />{" "} */}
            </Col>
            <Col style={cellStyle}>
              {decks[2].name}
              {/* <DeckItem deck={decks[2]} cards={cards} />{" "} */}
            </Col>
          </Row>

          {/* <Row>
            <Col style={cellStyle}>
              {" "}
              <DeckItem deck={decks[3]} cards={cards} />{" "}
            </Col>
            <Col style={cellStyle}>
              {" "}
              <DeckItem deck={decks[4]} cards={cards} />{" "}
            </Col>
            <Col style={cellStyle}>
              {" "}
              <DeckItem deck={decks[5]} cards={cards} />{" "}
            </Col>
          </Row>

          <Row>
            <Col style={cellStyle}>
              {" "}
              <DeckItem deck={decks[6]} cards={cards} />{" "}
            </Col>
            <Col style={cellStyle}>
              {" "}
              <DeckItem deck={decks[7]} cards={cards} />{" "}
            </Col>
            <Col style={cellStyle}>
              {" "}
              <DeckItem deck={decks[8]} cards={cards} />{" "}
            </Col>
          </Row> */}
        </Container>
      </div>
    );
    return renderDecks();
  }
}

export default DecksList;
