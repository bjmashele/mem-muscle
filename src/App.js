import React from 'react';
import Header from './common/Header';
import Layout from './decks/Layout';

export default ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
