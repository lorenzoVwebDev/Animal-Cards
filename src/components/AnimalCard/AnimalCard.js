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
    <Card title="Animal" animalDetails={        <AnimalDetails 
      {...props}
    />}>
      <div>
        <h3>{name}</h3>
        <div>{size} kg</div>
      </div>
    </Card>
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


