/* eslint-disable react/jsx-filename-extension */
/* eslint-disable implicit-arrow-linebreak */
import React from "react";

import DeckList from "./DecksList";
import DecksContainer from "../containers/DecksContainer";
import CardsShowCase from "../containers/CardsShowCase";
import "./styles.css";
import DecksController from "./DecksController";

const Layout = () => {
  return (
    <div>
      <div className="content">
        <div className="title is-3" style={{ textAlign: "center" }}>
          Card Decks
        </div>
        <DecksContainer />
      </div>
    </div>
  );
};

export default Layout;
