/* eslint-disable react/jsx-filename-extension */
/* eslint-disable implicit-arrow-linebreak */
import React from "react";

import DeckList from "./DecksList";
import DecksContainer from "../containers/DecksContainer";

const Layout = () => {
  return (
    <div>
      <div>
        <div className="title is-3" style={{ textAlign: "center" }}>
          Card Decks
        </div>
        <DecksContainer />
      </div>
    </div>
  );
};

export default Layout;
