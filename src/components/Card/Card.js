import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ img, name, id, selectCharacter }) => {
  
  const replaceURL = () => {
    if(img.includes('static')) {
      let wordReplace = img.replace('static', 'vignette')
      return wordReplace
    } else {
      return img
    }
  }
  
  return (
    <section className='card'>
      <Link to={`/${name}${id}`}>
        <img className='character-image' src={replaceURL()} alt={name} onClick={(event) => selectCharacter(event)} />
        <p>{name}</p>
      </Link>
    </section>
  )
}

export default Card;