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

function AnimalDetails({diet, href, description}) {
  return (
    <>
      <h4>Details</h4>
      <h5>Diet
      <p>{
        diet.map(food => {
          return convertFood(food)
        }).join(' ')
      }</p>
      </h5>
      <h5>Description</h5>
      <p>{description}</p>
      <br/>
      <a href={href} className="btn btn-primary">Know more</a>
    </>
  )
}

AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default AnimalDetails;