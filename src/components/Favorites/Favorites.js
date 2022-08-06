import React from 'react';
import './Favorites.css';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const Favorites = ({ makeFavorite, char, favorites, unfavorite }) => {
  console.log("6", char)

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
      {/* {char.isHearted && <button className='full-heart'>💚</button> ? <button className='full-heart' onClick={() => unfavorite(char)}>💚</button> : <button className='empty-heart' onClick={() => makeFavorite()}>🤍</button>} */}
    </>
  )
}

export default Favorites;