import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ img, name, id, selectCharacter }) => {
  
  return (
    <section className='card'>
      <Link to={`/${name}${id}`}>
        <img className='character-image' src={img} alt={name} onClick={(event) => selectCharacter(event)} />
        <p>{name}</p>
      </Link>
    </section>
  )
}

export default Card;