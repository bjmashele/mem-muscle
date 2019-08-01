import React from 'react';
import Header from './common/Header';

export default ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
