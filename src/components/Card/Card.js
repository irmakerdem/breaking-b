import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ img, name }) => {
  return (
    <section className='card'>
      <Link to={`/details/${name}`}>
        <img className='character-image' src={img} alt={name} />
        <p className='character-name'>{name}</p>
      </Link>
    </section>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
}

export default Card;