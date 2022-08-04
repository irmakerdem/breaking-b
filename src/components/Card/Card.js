import React from 'react';
import './Card.css';

const Card = ({ img, name, nickname, occupation, status, portrayed, id }) => {
  return (
    <div className='card'>
      <img className='characterImage' src={img} alt={name} />
      <p>Name: {name}</p>
      <p>Nickname: {nickname}</p>
      <p>Occupation: {occupation}</p>
      <p>Status: {status}</p>
      <p>Portrayed By: {portrayed}</p>
    </div>
  )
}

export default Card;