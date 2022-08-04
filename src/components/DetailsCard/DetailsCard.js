import React from 'react';
import './DetailsCard.css';

const DetailsCard = ({ img, name, nickname, occupation, status, portrayed, replaceURL, id }) => {
  
  // let commaOccupation = occupation.join(', ')

  return (
    <>
      <div className='details-card'>
        <img className='details-image' src={replaceURL()} alt={name} />
        {/* <img className='details-card-image' src={img} alt={name} /> */}
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