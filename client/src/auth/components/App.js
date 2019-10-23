import React from "react";
import Header from "./Header";

//feffdb  #f2f4f6
export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
