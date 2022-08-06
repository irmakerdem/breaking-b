import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header-title'>
      <Link to='/'>
        <h1>Breaking Bad</h1>
      </Link>
    </header>
  )
}

export default Header;