import React from 'react';
import './DetailsCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DetailsCard = ({ selectedCharacter, makeFavorite, unfavorite }) => {
  let commaOccupation = selectedCharacter.occupation.join(', ')

  return (
    <>
      <div className='details-card'>
        <img className='details-card-image' src={selectedCharacter.img} alt={selectedCharacter.name} />
        <p>Name: {selectedCharacter.name}</p>
        <p>Nickname: {selectedCharacter.nickname}</p>
        <p>Occupation: {commaOccupation}</p>
        <p>Status: {selectedCharacter.status}</p>
        <p>Portrayed By: {selectedCharacter.portrayed}</p>
      </div>
      <Link to='/'>
        <button className='go-home'>GO HOME</button>
      </Link>
      <Link to='/favorites'>
        <button className='go-favorites'>GO TO FAVORITES</button>
      </Link>
      {selectedCharacter.isHearted && <button className='full-heart'>💚</button> ? <button className='full-heart' onClick={() => unfavorite(selectedCharacter)}>💚</button> : <button className='empty-heart' onClick={() => makeFavorite(selectedCharacter)}>🤍</button>}
    </>
  )
}

DetailsCard.propTypes = {
  selectedCharacter: PropTypes.object,
  makeFavorite: PropTypes.func,
  unfavorite: PropTypes.func
}

export default DetailsCard;