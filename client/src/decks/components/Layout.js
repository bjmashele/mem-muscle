/* eslint-disable react/jsx-filename-extension */
/* eslint-disable implicit-arrow-linebreak */
import React from "react";

import DeckList from "./DecksList";
import DecksContainer from "../containers/DecksContainer";
import CardsShowCase from "../containers/CardsShowCase";
import "./styles.css";
import DecksController from "./DecksController";

const Layout = () => {
  const temp = [1, 2, 4];
  return (
    <div className="wrapper container">
      <div className="header">
        {/* <DecksController /> */}
        <hr />
      </div>
      <div className="content">
        <div className="title is-3" style={{ textAlign: "center" }}>
          Card Decks
        </div>
        <DecksContainer />
      </div>

      <div className="footer">Footer</div>
    </div>
  );
};

export default Layout;
