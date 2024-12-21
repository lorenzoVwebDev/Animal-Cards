import React from 'react';
import './AnimalCard.css';
import PropTypes from 'prop-types';

function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  additional,
  showAdditional
}) {
  return (
    <div className="wrapper">
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <h3>{size}kg</h3>
      <div>{diet.join(', ')}</div>
      {additional && <input type="button" onClick={() => showAdditional(additional)} value='Additionals'/>}
    </div>
  )
}


AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string),
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  showAdditional: PropTypes.func.isRequired
}

AnimalCard.defaultProps = {
  additional: {
    notes: 'No additional information for this animal is provided!'
  }
}


export default AnimalCard;


