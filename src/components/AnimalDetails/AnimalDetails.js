import React, { useState } from 'react';
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
  const [ expanded, setExpanded ] = useState(false);
  
  const expandDescritpion = (event) => {
    const cardBody = event.currentTarget.parentElement;
/*     if (expanded === false) {
      console.log(expanded)
      console.dir(cardBody.style);
      cardBody.children[6].style.overflowY = "auto";
      cardBody.children[6].style.height = "100%";
      setExpanded(true)

    } else {
      console.log(expanded)
      cardBody.children[6].style.overflowY = "auto";
      cardBody.children[6].style.height = "25vw";
      setExpanded(false)
    } */
    cardBody.children[6].classList.toggle('expanded')
  }
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
      <div className="description-container">
      <p>{description}</p>
      <br/>

      </div>
      <br/>
      <button className="expand-button" onClick={(event) => {expandDescritpion(event)}}>Expand</button>
      <button className="know-more-button"><a href={href} className="btn btn-primary">Know more</a></button>
    </>
  )
}

AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default AnimalDetails;