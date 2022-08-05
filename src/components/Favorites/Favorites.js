import React from 'react';
import './Favorites.css';
import { Link } from 'react-router-dom';

const Favorites = ({ makeFavorite, char }) => {
  console.log("6", char)

  return (
    <>
      <Link to='/'>
        <button className='go-home'>GO HOME</button>
      </Link>
      {char.isHearted === true ? <button className='full-heart'>💚</button> : <button className='empty-heart' onClick={() => makeFavorite()}>🤍</button>}
    </>
  )
}

export default Favorites;