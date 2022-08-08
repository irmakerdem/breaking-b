import React from 'react';
import './DetailsCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import yellow from '../../assets/yellow-fly.png';
import green from '../../assets/green-fly.png';

const DetailsCard = ({ selectedCharacter, makeFavorite, unfavorite }) => {
  let commaOccupation = selectedCharacter.occupation.join(', ');
  return (
    <>
      <div className='buttons-container'>
        <Link to='/'>
          <ul>
            <li className='both-but'><span>GO HOME</span></li>
          </ul>
        </Link>
        <Link to='/favorites'>
          <ul>
            <li className='both-but'><span>GO TO FAVORITES<img className='mini-fly' src={green}></img></span></li>
          </ul>
        </Link>
      </div>
      <div className='all-details'>
        <div className='details-image-container'>
          <img className='details-card-image' src={selectedCharacter.img} alt={selectedCharacter.name} />
        </div>
        <div className='details-details-container'>
          <p>Name: {selectedCharacter.name}</p>
          <p>Nickname: {selectedCharacter.nickname}</p>
          <p>Occupation: {commaOccupation}</p>
          <p>Status: {selectedCharacter.status}</p>
          <p>Portrayed By: {selectedCharacter.portrayed}</p>
          {selectedCharacter.isHearted && <img className='full-heart' src={green}></img> ? <img className='full-heart' src={green} onClick={() => unfavorite(selectedCharacter)}></img> : <img className='empty-heart' src={yellow} onClick={() => makeFavorite(selectedCharacter)}></img>}
        </div>
      </div>
    </>
  )
}

DetailsCard.propTypes = {
  selectedCharacter: PropTypes.object,
  makeFavorite: PropTypes.func,
  unfavorite: PropTypes.func
}

export default DetailsCard;