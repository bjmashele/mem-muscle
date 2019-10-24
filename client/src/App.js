import React from "react";
import Header from "./common/Header";

export default ({ children }) => (
  <div className="container app" style={{ minHeight: "85vh" }}>
    <Header />

    {children}
    <footer
      className="container"
      style={{ height: "5vh", backgroundColor: "#5f6769" }}
    >
      Hello Footer
    </footer>
  </div>
);
