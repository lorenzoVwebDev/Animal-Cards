import React from 'react';
import PropTypes from 'prop-types';

function Card({ children, title, animalDetails, imgurl}) {
  return (
    <div className="card">
      <img src={imgurl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
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