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
    <>
      <h4>Details</h4>
      {
        diet.map(food => {
          return convertFood(food)
        }).join(' ')
      }
      <br/>
      <a href="https://it.wikipedia.org/wiki/Lion_-_La_strada_verso_casa" class="btn btn-primary">Know more</a>
    </>
  )
}

AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default AnimalDetails;