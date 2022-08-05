import React from 'react';
import './DetailsCard.css';

const DetailsCard = ({ singleCharacter}) => {
console.log(singleCharacter)
  // let commaOccupation = occupation.join(', ')

  return (
    <>
      <div className='details-card'>
        <img className='details-card-image' src={singleCharacter.img} alt={singleCharacter.name} />
        <p>Name: {singleCharacter.name}</p>
        <p>Nickname: {singleCharacter.nickname}</p>
        <p>Occupation: {singleCharacter.occupation}</p>
        <p>Status: {singleCharacter.status}</p>
        <p>Portrayed By: {singleCharacter.portrayed}</p>
      </div>
      <button>GO BACK</button>
      <p>❤️</p>
    </>
  )
}

export default DetailsCard;