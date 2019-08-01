import React from 'react';

const DeckItem = ({ name }) => (
  <div className="card" style={{ marginBottom: '15px' }}>
    <div className="card-image">
      <figure className="image is 4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
      </figure>
    </div>
    <div className="card-content">{name}</div>
  </div>
);

export default DeckItem;
