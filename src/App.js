import React from 'react';
import Header from './common/Header';

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};