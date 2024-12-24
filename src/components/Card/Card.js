import React from 'react';
import PropTypes from 'prop-types';

function Card({ children, title, animalDetails, imgurl, name}) {
  return (
    <>
      <div className="image-container">
      <img src={imgurl} className="card-img" alt={name} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {children}
        {animalDetails}
      </div>
    </>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element.isRequired]),
  title: PropTypes.string.isRequired
}

export default Card;