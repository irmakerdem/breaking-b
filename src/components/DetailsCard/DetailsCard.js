import React from 'react';
import './DetailsCard.css';

const DetailsCard = ({ matchedCharacter, characters }) => {
  // let commaOccupation = occupation.join(', ')
  
  let selectedCharacter = characters.find(character => matchedCharacter === character.name)

  return (
    <>
      <div className='details-card'>
        <img className='details-card-image' src={selectedCharacter.img} alt={selectedCharacter.name} />
        <p>Name: {selectedCharacter.name}</p>
        <p>Nickname: {selectedCharacter.nickname}</p>
        <p>Occupation: {selectedCharacter.occupation}</p>
        <p>Status: {selectedCharacter.status}</p>
        <p>Portrayed By: {selectedCharacter.portrayed}</p>
      </div>
      <button className='go-home'>GO HOME</button>
      <button className='go-favorites'>GO TO FAVORITES</button>
      <p className='heart'>❤️</p>
    </>
  )
}

export default DetailsCard;