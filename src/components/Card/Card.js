import React from 'react';
import './Card.css';

const Card = ({ img, name, nickname, occupation, status, portrayed, id }) => {
  
  const replaceURL = () => {
    if(img.includes('static')) {
      let wordReplace = img.replace('static', 'vignette')
      return wordReplace
    } else {
      return img
    }
  }
  
  return (
    <div className='card'>
      <img className='character-image' src={replaceURL()} alt={name} />
      <p>{name}</p>
      {/* <p>Nickname: {nickname}</p>
      <p>Occupation: {occupation}</p>
      <p>Status: {status}</p>
      <p>Portrayed By: {portrayed}</p> */}
    </div>
  )
}

export default Card;