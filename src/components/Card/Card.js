import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ img, name }) => {
  
  return (
    <section className='card'>
      <Link to={`/${name}`}>
        <img className='character-image' src={img} alt={name} />
        <p>{name}</p>
      </Link>
    </section>
  )
}

export default Card;