import React from 'react';
import './Favorites.css';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Favorites = ({ favorites }) => {
  window.scroll(0,0);
  const favoritedCharacters = favorites.map(fav => {
    return (
      <Card
        img={fav.img}
        name={fav.name}
        nickname={fav.nickname}
        occupation={fav.occupation}
        status={fav.status}
        portrayed={fav.portrayed}
        key={fav.char_id}
        id={fav.char_id}
      />
    )
  })

  return (
    <div className='big-favorites-container'>
      <Link to='/'>
        <ul>
          <li><span>GO HOME</span></li>
        </ul>
      </Link>
      <div className='fav-characters-container'>
        <h2 className='fav-characters-head'>Favorite Characters</h2>
      </div>
      <div className='fav-characters-only'>
        {favoritedCharacters.length ? favoritedCharacters : <p>Add your favorite characters!</p>}
      </div>
    </div>
  )
}

Favorites.propTypes = {
  favorites: PropTypes.array,
}

export default Favorites;