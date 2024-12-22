import React from 'react';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import Card from '../Card/Card';
import './AnimalCard.css';
import PropTypes from 'prop-types';

function AnimalCard({
  name,
  size,
  ...props
}) {
  return (
    <div class="col">
    <Card title={name} 
    animalDetails={
    <AnimalDetails {...props}
    />}
    {...props}
    >
        <p className="card-text">{name}</p>
        <p className="card-text">{size} kg</p>
    </Card>
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


