import React, { useState, useEffect } from 'react';
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
  const [ resized, setResized ] = useState(false);

  window.addEventListener('resize', () => {
    if (document.querySelector('.description-container.expanded') && document.querySelector('.card.expanded')) {
      const cardBody = document.querySelector('.description-container.expanded')
      const card = document.querySelector('.card.expanded')
      cardBody.style.height = '25vw';
      card.style.height = '85vw';
      cardBody.classList.toggle('expanded');
      card.classList.toggle('expanded');
    } 

    setExpanded(false)
  })

  const expandDescription = (event) => {
    const viewportHeight = window.innerHeight;
    const card = event.currentTarget.parentElement.parentElement;
    const cardBody = event.currentTarget.parentElement;
/*     const check = event.currentTarget.children[0]; */
    if (expanded === false) {
/*       check.checked = true; */
      setExpanded(true);
      cardBody.children[6].style.height = `${(cardBody.children[6].scrollHeight / viewportHeight)*100}vh`;
      card.style.height = `${((card.clientHeight -card.children[0].clientHeight+ cardBody.children[6].scrollHeight)/(viewportHeight))*100}vh`;
    }  else {
      cardBody.children[6].style.height = `25vw`;
      card.style.height = `85vw`
/*       check.checked = false; */
      setExpanded(false);
    }
  
    card.classList.toggle('expanded')
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
      <button className="expand-button" onClick={(event) => {expandDescription(event)}}>Expand{/* <input type="radio" style={
        {
          display: 'none'
        }
      } class="hidden-radio"></input> */}</button>
      <button className="know-more-button"><a href={href} className="btn btn-primary" target="__blank">Know more</a></button>
    </>
  )
}

AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default AnimalDetails;