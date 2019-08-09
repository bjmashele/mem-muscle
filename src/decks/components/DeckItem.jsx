import React from 'react';

const DeckItem = ({ name }) => (
  <div className="card" style={{ marginBottom: '15px' }}>
    <div className="card-content title is-4" style={{ textAlign: 'center' }}>
      {name}
    </div>
    <div className="card-image">
      <figure className="image is-128x128">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image" />
      </figure>
    </div>
  </div>
);

export default DeckItem;
