import React from "react";
import Header from "./common/Header";

export default ({ children }) => (
  <div className="container" style={{ minHeight: "85vh" }}>
    <Header />

    {children}
  </div>
);
