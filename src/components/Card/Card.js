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
    <Link to={`/details${id}`}>
      <section className='card'>
        <div className='character-img-div'>
          <img className='character-image' src={replaceURL()} alt={name} onClick={(event) => selectCharacter(event)} />
        </div>
        <div className='character-name-div'>
          <p>{name}</p>
        </div>
      </section>
    </Link>
  )
}

export default Card;