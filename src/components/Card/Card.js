import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ img, name }) => {
  
  return (
    <section className='card'>
      <Link to={`/${name}`}>
        <img className='character-image' src={img} alt={name} />
        <p className='character-name'>{name}</p>
      </Link>
    </section>
  )
}

export default Card;


// class Card {
//   constructor(char) {
//     this.name = char.name,
//     this.img = char.img,
//     this.occupation = char.occupation,
//     // this.isHearted = false
//   }

//   makeFavorite() {
//     char.isHearted = true
//   }
// }