import React from 'react';
import './Favorites.css';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Favorites = ({ favorites }) => {

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
    <>
      <Link to='/'>
        <button className='go-home'>GO HOME</button>
      </Link>
      {favoritedCharacters}
    </>
  )
}

Favorites.propTypes = {
  favorites: PropTypes.array,
}

export default Favorites;