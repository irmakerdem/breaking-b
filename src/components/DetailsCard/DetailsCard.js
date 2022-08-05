import React from 'react';
import './DetailsCard.css';

const DetailsCard = ({ name, nickname, occupation, status, portrayed, img, id }) => {

  // let commaOccupation = occupation.join(', ')

  return (
    <>
      <div className='details-card'>
        <img className='details-card-image' src={img} alt={name} />
        <p>Name: {name}</p>
        <p>Nickname: {nickname}</p>
        <p>Occupation: {occupation}</p>
        <p>Status: {status}</p>
        <p>Portrayed By: {portrayed}</p>
      </div>
      <button>GO BACK</button>
      <p>❤️</p>
    </>
  )
}

export default DetailsCard;