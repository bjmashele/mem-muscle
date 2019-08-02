import React from 'react';

const DeckItem = ({ name, img }) => (
  <div className="card" style={{ marginBottom: '15px' }}>
    <div className="card-content title is-4" style={{ textAlign: 'center' }}>
      {name}
    </div>
    <div className="card-image">
      <figure className="image is 4by3">
        <img src={img} alt="Placeholder image" />
      </figure>
    </div>
  </div>
);

export default DeckItem;
