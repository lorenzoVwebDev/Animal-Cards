import React from 'react';
import PropTypes from 'prop-types';

function Card({ children, title, animalDetails}) {
  return (
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>
        {children}
        {animalDetails}
      </div>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element.isRequired]),
  title: PropTypes.string.isRequired
}

export default Card;