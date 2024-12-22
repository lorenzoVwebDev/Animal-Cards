import React from 'react';
import PropTypes from 'prop-types';

function convertFood(food) {
  switch (food) {
    case 'insects':
      return '🐜';
    case 'meat':
      return '🍖';
    case 'plants':
      return '🌱';
  }
}

function AnimalDetails({diet}) {
  return (
    <div className="details">
      <h4>Details</h4>
      {
        diet.map(food => {
          return convertFood(food)
        }).join(' ')
      }
    </div>
  )
}

AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default AnimalDetails;