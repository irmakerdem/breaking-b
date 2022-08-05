import React from 'react';
import './Favorites.css';
import { Link } from 'react-router-dom';

const Favorites = () => {

  return (
    <>
      <Link to='/'>
        <button className='go-home'>GO HOME</button>
      </Link>
      <p className='heart'>❤️</p>
    </>
  )
}

export default Favorites;