import React from 'react';
import './DetailsCard.css';
import { Link } from 'react-router-dom';

const DetailsCard = ({ matchedCharacter, characters, makeFavorite }) => {
  // let commaOccupation = occupation.join(', ')
  
  let selectedCharacter = characters.find(character => matchedCharacter === character.name)
  console.log("9", selectedCharacter)
  // const makeFavorite = () => {
  //   console.log("11", selectedCharacter)
  //   selectedCharacter.isHearted = true;
  //   console.log("13", selectedCharacter)
  // } 

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
      <Link to='/'>
        <button className='go-home'>GO HOME</button>
      </Link>
      <Link to='/favorites'>
        <button className='go-favorites'>GO TO FAVORITES</button>
      </Link>
      {selectedCharacter.isHearted ? <button className='full-heart'>💚</button> : <button className='empty-heart' onClick={(selectedCharacter) => makeFavorite(selectedCharacter)}>🤍</button>}
    </>
  )
}

export default DetailsCard;