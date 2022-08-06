import React from 'react';
import './DetailsCard.css';
import { Link } from 'react-router-dom';

const DetailsCard = ({ selectedCharacter, makeFavorite, unfavorite }) => {
  // let commaOccupation = occupation.join(', ')

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
      {/* {selectedCharacter.isHearted ? <button className='full-heart'>💚</button> : <button className='empty-heart' onClick={() => makeFavorite(selectedCharacter)}>🤍</button>} */}
      {selectedCharacter.isHearted && <button className='full-heart'>💚</button> ? <button className='full-heart' onClick={() => unfavorite(selectedCharacter)}>💚</button> : <button className='empty-heart' onClick={() => makeFavorite(selectedCharacter)}>🤍</button>}

      {/* need to prevent duplicate favoriting */}
      {/* need to add functionality to details page to unfavorite from there but also delete on favorites page */}
      {/* need to add functionality to favorites page to unfavorite from there */}

      {console.log("33s", selectedCharacter)}
    </>
  )
}

export default DetailsCard;