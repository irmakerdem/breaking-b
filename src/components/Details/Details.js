import React from 'react';
import './Details.css';
import Card from '../Card/Card';

const Details = ({ img, name, nickname, occupation, status, portrayed, id }) => {
  
  // let commaOccupation = occupation.join(', ')

  return (
    <>
    <Card />
    {/* <div className='details'>
      <img className='details-image' src={replaceURL()} alt={name} />
      <p>Name: {name}</p>
      <p>Nickname: {nickname}</p>
      <p>Occupation: {occupation}</p>
      <p>Status: {status}</p>
      <p>Portrayed By: {portrayed}</p>
    </div> */}
    </>

  )
}

export default Details;