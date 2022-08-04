import React from 'react';
import './Card.css';

const Card = ({ img, name, nickname, occupation, status, portrayed, id }) => {
  
  const replaceURL = () => {
    if(img.includes('static')) {
      let something2 = img.replace('static', 'vignette')
      return something2
    } else {
      return img
    }
  }
  
  return (
    <div className='card'>
      <img className='characterImage' src={replaceURL()} alt={name} />
      <p>Name: {name}</p>
      <p>Nickname: {nickname}</p>
      <p>Occupation: {occupation}</p>
      <p>Status: {status}</p>
      <p>Portrayed By: {portrayed}</p>
    </div>
  )
}

export default Card;