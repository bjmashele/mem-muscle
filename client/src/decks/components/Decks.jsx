import React from "react";
import requireAuth from "../../auth/components/requireAuth";
import Layout from "./Layout";

const Decks = () => (
  <div>
    <Layout />
  </div>
);

export default requireAuth(Decks);
